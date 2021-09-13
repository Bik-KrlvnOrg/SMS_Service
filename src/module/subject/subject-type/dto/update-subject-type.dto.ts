import {IsNotEmpty} from "class-validator";

export class UpdateSubjectTypeDto {
    subjectTypeId: string
    @IsNotEmpty()
    name: string
    description: string
}