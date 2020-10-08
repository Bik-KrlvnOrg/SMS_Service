import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";
import { Gender, StaffType, MaritalStatus } from "../../../libs";

export class StaffDto {
    id?: number;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEnum(Gender)
    gender: Gender;

    @IsString()
    dob: string;

    @IsString()
    @MinLength(2)
    username: string;

    @MinLength(4)
    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber('ZZ')
    contact: string;

    avatar?: string;

    permissions?: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    teachingStatus?: 'notissued' | 'issued' | 'resigned'

    status?: 'selected' | 'notselected' | 'onhold' | 'added' | 'dismisied'

    employmentStatus?: 'issued' | 'notissued' | 'accepted' | 'notaccepted'

    @IsEnum(StaffType)
    staffType: StaffType

    @IsNumber()
    departmentId: number;

    @IsNumber()
    classId: number;

    @IsOptional()
    @IsString()
    bloodGroup?: string;

    @IsOptional()
    @IsEnum(MaritalStatus)
    maritalStatus?: MaritalStatus

    @IsOptional()
    @IsNumberString()
    baseSalary?: string

    @IsNumber()
    subjectId: number;

    @IsNumber()
    positionId: number;

    dateOfJoining?: Date

    @IsOptional()
    @IsString()
    terminationDate?: string

    @IsOptional()
    @IsString()
    remarks?: string

    @IsOptional()
    @IsString()
    country?: string

    @IsOptional()
    @IsString()
    city?: string

    @IsOptional()
    @IsString()
    nationality?: string
}
