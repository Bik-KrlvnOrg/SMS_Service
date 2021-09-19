import {CreateAddressDto, Gender} from "../../../libs";
import {IsEnum, IsNotEmpty, IsOptional, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {CreateParentDto} from "../parent/dto";

export class CreateStudentDto {
    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsOptional()
    @IsNotEmpty()
    middle_name: string

    @IsNotEmpty()
    contact: string

    @IsEnum(Gender)
    gender: Gender

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @ValidateNested({each: true})
    @Type(() => CreateAddressDto)
    addresses: CreateAddressDto[]

    @IsNotEmpty()
    @ValidateNested({each: true})
    @Type(() => CreateParentDto)
    parents: CreateParentDto[]
}
