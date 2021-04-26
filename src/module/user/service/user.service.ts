import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { UserExistException } from '../../../libs/exception/user-exist.exception';
import { classToPlain } from 'class-transformer';
import { BcryptPasswordEncoderImpl } from '../../security/service/bcrypt-password-encoder-impl';
import { TokenService } from '../../security/service/token.service';
import { ConfirmationTokenService } from '../../security/service/confirmation-token.service';
import { Transactional } from 'typeorm-transactional-cls-hooked';

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


  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
