import { StaffEntity } from "../../../entities/EsStaff"
import { Gender, MaritalStatus, StaffType } from "../../../libs"
import { StaffDto } from "../dto"

export class StaffMock {
    static getStaffDto(): StaffDto {
        return {
            address: 'any address',
            classId: 1,
            contact: 'any contact number',
            departmentId: 1,
            dob: 'any date string Y-m-d',
            email: 'any string',
            firstName: 'any firstname',
            gender: Gender.MALE,
            lastName: 'any lastname',
            password: 'any password',
            positionId: 1,
            staffType: StaffType.TEACHING,
            subjectId: 1,
            username: 'any username',
            avatar: 'any photo url',
            baseSalary: '1000',
            bloodGroup: '0+',
            city: 'any cityname',
            country: 'any countryname',
            dateOfJoining: new Date(),
            employmentStatus: 'accepted',
            maritalStatus: MaritalStatus.NOT_MARRIED,
            nationality: 'any nationality',
            permissions: '1',
            status: 'added',
            teachingStatus: 'notissued',
            terminationDate: 'any date',
            remarks: 'any remarks'
        }
    }

    static getStaffEntity(): StaffEntity {
        return this.getStaffDto() as StaffEntity
    }
}