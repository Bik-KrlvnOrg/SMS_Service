import { StudentEntity } from "../../../entities/EsPreadmission";
import { Gender } from "../../../libs";
import { AdmissionDto } from "../dto";

export class StudentMock {
    static getAdmissionDto(): AdmissionDto {
        return {
            id:1,
            address: 'any address',
            admissionId: "1",
            admissionType: 'any type',
            classId: 1,
            contact: 'any contact',
            dob: new Date('2020-01-01'),
            email: 'any email',
            firstName: 'any firstname',
            fromDate: new Date('2020-01-01'),
            gender: Gender.MALE,
            lastName: 'any lastname',
            schoolId: 1,
            smsNo: 'any sms',
            toDate: new Date('2020-01-01'),
            username: 'any username'
        }
    }
    static getStudentEntity(): StudentEntity {
        return this.getAdmissionDto() as StudentEntity
    }
}