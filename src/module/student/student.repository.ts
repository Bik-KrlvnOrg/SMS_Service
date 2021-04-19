import { EntityRepository, Repository } from 'typeorm';
import { StudentEntity } from '../../entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  createStudent(data: CreateStudentDto) {
    const entity = this.create(data);
    return this.save(entity);
  }
}