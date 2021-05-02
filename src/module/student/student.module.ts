import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { ParentModule } from './parent';

@Module({
  imports:[TypeOrmModule.forFeature([StudentRepository]), ParentModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {
}
