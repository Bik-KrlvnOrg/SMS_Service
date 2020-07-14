import { Controller, Get, UseGuards, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { AuthPayload } from '../auth/model/auth.model';
import { StudentService } from './student.service';
import { StudentProfileDto } from './model/student.model';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(
    @GetUser() payload: AuthPayload,
  ): Promise<StudentProfileDto> {
    const data = await this.studentService.getProfile(payload);
    if (!data) throw new NotFoundException('student profile not found');
    return data;
  }
}
