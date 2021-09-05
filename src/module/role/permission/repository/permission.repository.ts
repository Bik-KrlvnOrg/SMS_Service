import {EntityRepository} from "typeorm";
import {PermissionEntity} from "../../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(PermissionEntity)
export class PermissionRepository extends BaseRepository<PermissionEntity>{

}