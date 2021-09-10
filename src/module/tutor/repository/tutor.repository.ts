import {EntityRepository} from "typeorm";
import {TutorEntity} from "../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(TutorEntity)
export class TutorRepository extends BaseRepository<TutorEntity> {

}