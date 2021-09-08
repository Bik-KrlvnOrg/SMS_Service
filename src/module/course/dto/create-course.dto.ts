import {SubjectEntity} from "../../../entities";
import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    code: string
    description: string
    @IsNotEmpty()
    @IsNumber()
    capacity: number
    subjects: SubjectEntity[]
}