import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { StudentService } from '../student.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../security/guard';
import { Roles } from '../../decorator';
import { Role } from '../../../libs';
import { StudentEntity } from '../../../entities';

@Controller("students/management")
export class StudentManagementController {
  constructor(private readonly studentService: StudentService) {}


  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @Roles(Role.ADMIN,Role.ADMINISTRATIVE)
  @Post()
  create(@Body() studentEntity: StudentEntity) {
    return this.studentService.create(studentEntity);
  }
}