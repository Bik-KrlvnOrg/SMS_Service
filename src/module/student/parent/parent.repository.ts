import { EntityRepository, Repository } from 'typeorm';
import { ParentEntity } from '../../../entities';
import { CreateParentDto } from './dto';

@EntityRepository(ParentEntity)
export class ParentRepository extends Repository<ParentEntity> {

  async createParent(dto: CreateParentDto): Promise<ParentEntity> {
    const entity = this.create(dto);
    return this.save(entity);
  }
}