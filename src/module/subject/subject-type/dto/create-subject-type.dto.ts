import {IsNotEmpty} from "class-validator";

export class CreateSubjectTypeDto {
    @IsNotEmpty()
    name: string
    description: string
}