import {IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString} from 'class-validator';
import {RecordSort} from '.';

export class FindOptionsDto {
    @IsOptional()
    @IsNumberString()
    id?: number

    @IsOptional()
    @IsNumberString()
    skip?: number

    @IsOptional()
    @IsNumberString()
    take?: number

    @IsOptional()
    @IsNumberString()
    classId?: number

    @IsOptional()
    @IsNumberString()
    studentId?: number

    @IsOptional()
    @IsNumberString()
    staffId?: number

    @IsOptional()
    @IsNumberString()
    departmentId?: number

    @IsOptional()
    @IsString()
    fromDate: string
    createdOn?: any

    @IsOptional()
    @IsEnum(RecordSort)
    sort: RecordSort = RecordSort.DESC
}


export class CreateAddressDto {
    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    country: string

    @IsNotEmpty()
    stateOrProvince: string

    @IsNotEmpty()
    street: string

    zipOrPostalCode: string
}