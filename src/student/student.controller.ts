import { Controller, Get, UseGuards, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { UserEntity } from '../auth/model/auth.model';
import { StudentService } from './student.service';
import { StudentProfileResponse } from './model/student.model';
import { ResponseObject } from '../model/response.model';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(
    @GetUser() payload: UserEntity,
  ): Promise<ResponseObject<'profile', StudentProfileResponse>> {
    const data = await this.studentService.getProfile(payload);
    return { profile: data };
  }
}
