import {SubjectEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class AssignSubjectDto {
    tutorId: string
    @IsNotEmpty()
    subjects: SubjectEntity[]
}