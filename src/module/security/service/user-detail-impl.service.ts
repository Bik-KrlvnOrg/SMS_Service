import { UserDetailService } from '../../user/interface/user-detail-service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../user/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { UserDetails } from '../../user/interface/user-details';
import { UserNotFoundException } from '../../../libs/exception/user-not-found.exception';

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


}