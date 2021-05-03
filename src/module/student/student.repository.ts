import { EntityRepository } from 'typeorm';
import { StudentEntity } from '../../entities';
import { BaseRepository, Transactional } from 'typeorm-transactional-cls-hooked';

@EntityRepository(StudentEntity)
export class StudentRepository extends BaseRepository<StudentEntity> {

  @Transactional()
  async createStudent(data: StudentEntity): Promise<StudentEntity> {
    return this.save(data);
  }
}