import { UserDetails, UserDetailService } from '../../user/interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../user/repository';
import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from '../../../libs';

@Injectable()
export class UserDetailImplService implements UserDetailService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository) {
  }

  async loadUserByUsername(username: string): Promise<UserDetails> {
    const user = await this.userRepository.findByEmail(username);
    const errorMsg = `user with email ${username} not found`;
    if (!user) throw new UserNotFoundException(errorMsg);
    return user;
  }

  async loadUserById(userId: string): Promise<UserDetails> {
    const user = await this.userRepository.findOne({ id: userId });
    if (!user) throw new UserNotFoundException('user not found');
    return user;
  }

}