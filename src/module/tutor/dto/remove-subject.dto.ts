import {SubjectEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class RemoveSubjectDto {
    tutorId: string
    @IsNotEmpty()
    subjects: SubjectEntity[]
}