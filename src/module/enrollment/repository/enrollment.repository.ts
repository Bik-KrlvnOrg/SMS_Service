import {EntityRepository} from "typeorm";
import {EnrollmentEntity} from "../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(EnrollmentEntity)
export class EnrollmentRepository extends BaseRepository<EnrollmentEntity> {

}
