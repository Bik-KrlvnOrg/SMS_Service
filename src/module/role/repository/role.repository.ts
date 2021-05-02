import { EntityRepository, Repository } from 'typeorm';
import { RoleEntity } from '../../../entities';

@EntityRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity>{

}