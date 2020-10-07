import { Repository, EntityRepository } from "typeorm";
import { StaffAttendanceEntity } from "../../../entities/EsAttendStaff";

@EntityRepository(StaffAttendanceEntity)
export class StaffAttendanceRepository extends Repository<StaffAttendanceEntity>{

    async createStaffAttendance(data: Partial<StaffAttendanceEntity>): Promise<StaffAttendanceEntity> {
        const entity = this.create(data)
        return this.save(entity);
    }
}