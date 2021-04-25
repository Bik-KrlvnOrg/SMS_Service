import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { UserExistException } from '../../../libs/exception/user-exist.exception';
import { UserEntity } from '../../../entities/user.entity';
import { classToPlain, plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository) {
  }

  async create(createUserDto: CreateUserDto) {
    const userExists =
      await this.userRepository.findByEmail(createUserDto.email);
    if (userExists)
      throw new UserExistException(`${createUserDto.email} already in use`);
    const user = await this.userRepository.createUser(createUserDto);
    return classToPlain(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
