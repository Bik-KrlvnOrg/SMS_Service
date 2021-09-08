import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateSubjectDto {
    @IsNotEmpty()
    name: string
    @IsNumber()
    max_capacity: number
}