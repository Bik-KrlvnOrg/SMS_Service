import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto';
import { UpdateUserDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository';
import { UserExistException } from '../../../libs';
import { classToPlain } from 'class-transformer';
import { BcryptPasswordEncoderImpl } from '../../security/service';
import { TokenService } from '../../security/service';
import { ConfirmationTokenService } from '../../security/service';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { LoginUserDto } from '../dto';
import { InvalidCredentialException } from '../../../libs';
import { TokenEntity } from '../../../entities';
import { UserEntity } from '../../../entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly passwordEncoder: BcryptPasswordEncoderImpl,
    private readonly tokenService: TokenService,
    private readonly confirmationTokenService: ConfirmationTokenService) {
  }

  @Transactional()
  async create(createUserDto: CreateUserDto) {
    const userExists =
      await this.userRepository.findByEmail(createUserDto.email);
    if (userExists)
      throw new UserExistException(`${createUserDto.email} already in use`);
    createUserDto.password = await this.passwordEncoder.encode(createUserDto.password);
    const user = await this.userRepository.createUser(createUserDto);
    await this.confirmationTokenService.create(user);
    return classToPlain(user);
  }

  @Transactional()
  async confirmation(token: string): Promise<{ message: string }> {
    const entity = await this.confirmationTokenService.findByToken(token);
    if (!entity) return { message: 'please confirm your account' };
    entity.user.enabled = true;
    await this.userRepository.save(entity.user);
    return { message: 'user account confirmed' };
  }

  async usernameAndPassword(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findByUsername(loginUserDto.username);
    if (!user) throw new InvalidCredentialException();
    const isCorrect = await this.passwordEncoder.decode(loginUserDto.password, user.password);
    if (!isCorrect) throw new InvalidCredentialException();
    const entity = new TokenEntity();
    entity.user = user;
    const refreshToken = await this.tokenService.createRefreshToken(entity);
    const accessToken = await this.tokenService.generateAccessToken(entity);
    return {
      success: true,
      refreshToken: refreshToken,
      accessToken: accessToken,
    };
  }


  async findAll() {
    const users = await this.userRepository.find({});
    return classToPlain(users);
  }

  async save(user: UserEntity) {
    return this.userRepository.save(user);
  }

  async findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
