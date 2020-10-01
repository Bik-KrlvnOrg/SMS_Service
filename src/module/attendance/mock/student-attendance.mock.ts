import { StudentAttendanceEntity } from "../../../entities/EsAttendStudent";
import { AttendanceStatus } from "../../../libs";
import { StudentAttandanceDto } from "../dto";

export class StudentAttendanceMock {
    static getStudentAttendanceDto(): StudentAttandanceDto {
        return {
            classId: 1,
            name: "any name",
            status: AttendanceStatus.PRESENT,
            studentId: 1,
            id: 1
        }
    }

    static getStudentAttendanceEntity(): StudentAttendanceEntity {
        return this.getStudentAttendanceDto() as StudentAttendanceEntity
    }

}