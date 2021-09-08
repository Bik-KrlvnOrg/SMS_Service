import {EntityRepository} from "typeorm";
import {SubjectEntity} from "../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(SubjectEntity)
export class SubjectRepository extends BaseRepository<SubjectEntity> {

}