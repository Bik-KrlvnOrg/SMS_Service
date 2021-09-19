import {Gender, ParentType} from '../../../../libs';
import {IsEnum, IsNotEmpty, IsOptional} from "class-validator";
import {CreateStudentDto} from "../../dto/create-student.dto";

export class CreateParentDto {
  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  @IsNotEmpty()
  middle_name: string

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  email: string;

  @IsEnum(ParentType)
  type: ParentType;

  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  student: CreateStudentDto;
}
