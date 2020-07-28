import { Controller, Get, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { UserEntity } from '../auth/model/auth.model';
import { AuthGuard } from '@nestjs/passport';
import { ResponseObject } from '../model/response.model';
import { StaffProfileResponse } from './model/staff.model';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(
    @GetUser() user: UserEntity,
  ): Promise<ResponseObject<'profile', StaffProfileResponse>> {
    const data = await this.staffService.getProfile(user);
    return { profile: data };
  }
}
