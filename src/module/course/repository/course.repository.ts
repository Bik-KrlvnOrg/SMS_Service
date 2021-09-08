import {EntityRepository} from "typeorm";
import {CourseEntity} from "../../../entities";
import {BaseRepository} from "typeorm-transactional-cls-hooked";

@EntityRepository(CourseEntity)
export class CourseRepository extends BaseRepository<CourseEntity> {

}