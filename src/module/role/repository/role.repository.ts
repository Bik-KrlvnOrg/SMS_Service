import {EntityRepository} from 'typeorm';
import {RoleEntity} from '../../../entities';
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(RoleEntity)
export class RoleRepository extends BaseRepository<RoleEntity> {

}