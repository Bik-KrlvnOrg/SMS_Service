import { EntityRepository } from 'typeorm';
import { StudentEntity } from '../../entities';
import { CreateStudentDto } from './dto';
import { BaseRepository, Transactional } from 'typeorm-transactional-cls-hooked';

@EntityRepository(StudentEntity)
export class StudentRepository extends BaseRepository<StudentEntity> {

  @Transactional()
  async createStudent(data: CreateStudentDto) {
    const entity = this.create(data);
    return this.save(entity);
  }
}