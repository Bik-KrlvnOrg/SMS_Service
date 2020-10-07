import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { AttendanceStatus, StaffRemarks } from "../../../libs";

export class StaffAttendanceDto {
    id?: number;

    @IsNumber()
    departmentId: number;

    @IsOptional()
    createdOn?: Date;

    @IsNumber()
    staffId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    designationId: number;

    @IsEnum(AttendanceStatus)
    status: AttendanceStatus;

    @IsOptional()
    @IsEnum(StaffRemarks)
    remarks?: StaffRemarks;
}