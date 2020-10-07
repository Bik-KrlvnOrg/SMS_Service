import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { AttendanceStatus } from "../../../libs";

export class StudentAttandanceDto{
    id?: number;
  
    @IsOptional()
    @IsString()
    group?: string;
  
    @IsNumber()
    classId: number;
  
    @IsOptional()
    @IsString()
    createdOn?: Date;
  
    @IsOptional()
    @IsString()
    subject?: string;
  
    @IsOptional()
    @IsNumber()
    period?: number;
  
    @IsOptional()
    @IsNumber()
    periodFrom?: number;
  
    @IsOptional()
    @IsNumber()
    periodTo?: number;
  
    @IsNumber()
    studentId: number;
  
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEnum(AttendanceStatus)
    status: AttendanceStatus;
  
    @IsString()
    @IsOptional()
    remarks?: string;
}