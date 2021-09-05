import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController, StudentManagementController } from './controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { ParentModule } from './parent';
import { SecurityModule } from '../security';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentRepository]),
    ParentModule, SecurityModule],
  controllers: [
    StudentController,
    StudentManagementController],
  providers: [StudentService],
})
export class StudentModule {
}
