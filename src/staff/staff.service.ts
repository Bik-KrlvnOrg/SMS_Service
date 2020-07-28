import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaffRepository } from './staff.repository';
import { UserEntity } from '../auth/model/auth.model';
import { StaffProfileResponse } from './model/staff.model';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(StaffRepository) private staffRepository: StaffRepository,
  ) {}

  async getProfile(user: UserEntity): Promise<StaffProfileResponse> {
    const data = await this.staffRepository.getProfile(user);
    if (!data) throw new NotFoundException('profile not found');
    const dto = data.toProfile();
    return dto;
  }
}
