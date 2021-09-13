import {EntityRepository} from "typeorm";
import {SubjectTypeEntity} from "../../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(SubjectTypeEntity)
export class SubjectTypeRepository extends BaseRepository<SubjectTypeEntity> {

}