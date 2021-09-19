import {EntityRepository} from 'typeorm';
import {StudentEntity} from '../../entities';
import {BaseRepository} from 'typeorm-transactional-cls-hooked';

@EntityRepository(StudentEntity)
export class StudentRepository extends BaseRepository<StudentEntity> {
}
