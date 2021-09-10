import {IsEmail, IsEnum, IsNotEmpty, ValidateNested} from "class-validator";
import {CreateAddressDto, Gender} from "../../../libs";
import {Type} from "class-transformer";


export class CreateTutorDto {
    @IsNotEmpty()
    first_name: string

    @IsNotEmpty()
    last_name: string

    @IsNotEmpty()
    contact: string

    @IsEmail()
    email: string

    @IsEnum(Gender)
    gender: string

    @IsNotEmpty()
    dob: string

    @IsNotEmpty()
    @ValidateNested({each: true})
    @Type(() => CreateAddressDto)
    addresses: CreateAddressDto[]

    middle_name: string
}