import { StaffAttendanceEntity } from "../../../entities/EsAttendStaff";
import { AttendanceStatus } from "../../../libs";
import { StaffAttendanceDto } from "../dto";

export class StaffAttendanceMock {

    static getStaffAttendanceDto(): StaffAttendanceDto {
        return {
            departmentId: 1,
            name: 'any name',
            staffId: 1,
            status: AttendanceStatus.PRESENT,
            id: 1,
            designationId: 1
        }
    }
    
    static getStaffAttendanceEntity(): StaffAttendanceEntity {
        return this.getStaffAttendanceDto() as StaffAttendanceEntity

    }
}