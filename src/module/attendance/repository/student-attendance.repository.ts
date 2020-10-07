import { Repository, EntityRepository } from "typeorm";
import { StudentAttendanceEntity } from "../../../entities/EsAttendStudent";

@EntityRepository(StudentAttendanceEntity)
export class StudentAttendanceRepository extends Repository<StudentAttendanceEntity>{

    async createStudentAttendance(data: Partial<StudentAttendanceEntity>): Promise<StudentAttendanceEntity> {
        const entity = this.create(data)
        return this.save(entity)
    }
}