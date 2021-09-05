import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from './student.repository';
import { from } from 'rxjs';
import { StudentEntity } from '../../entities';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private readonly  studentRepository: StudentRepository) {
  }

  create(studentEntity: StudentEntity) {
    return from(this.studentRepository.createStudent(studentEntity));
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: string) {
    return this.studentRepository.findOne(id);
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: string) {
    return `This action removes a #${id} student`;
  }
}
