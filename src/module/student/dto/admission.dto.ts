import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { AcademicStatus, AccountStatus, Gender } from "../../../libs";

export class AdmissionDto {
    id?: number;

    @MinLength(2)
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    middleName?: string;

    @MinLength(2)
    @IsString()
    lastName: string;

    @MinLength(2)
    @IsString()
    username: string;

    @MinLength(4)
    @IsString()
    password?: string

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    dob: Date;

    age?: number;

    @IsEnum(Gender)
    gender: Gender

    @IsOptional()
    @IsString()
    smsNo: string;

    @IsString()
    @IsNotEmpty()
    contact: string;

    @IsNumber()
    classId: number;

    @IsOptional()
    @IsString()
    avatarUrl?: string

    @IsOptional()
    @IsString()
    bloodGroup?: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    fatherName?: string;

    @IsOptional()
    @IsString()
    @MinLength(2)
    motherName?: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsEnum(AcademicStatus)
    resultStatus?: AcademicStatus;

    @IsOptional()
    @IsEnum(AccountStatus)
    status?: AccountStatus

    @IsNotEmpty()
    @IsString()
    admissionId: string;

    @IsNumber()
    schoolId: number;

    @IsOptional()
    @IsString()
    admissionStatus?: string;

    admissionDate?: Date

    @IsOptional()
    @IsString()
    prevSchoolDate?: Date;

    @IsString()
    @IsNotEmpty()
    admissionType: string;

    @IsString()
    residentialAddress?: string;

    @IsString()
    religion?: string;

    @IsString()
    nationality?: string;

    @IsString()
    fromDate: Date

    @IsString()
    toDate: Date

}