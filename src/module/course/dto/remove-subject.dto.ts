import {SubjectEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class RemoveSubjectDto {
    @IsNotEmpty()
    course_id: string
    subjects: SubjectEntity[]
}