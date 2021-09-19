import {ClassroomEntity, CourseEntity, StudentEntity, YearLevelEntity} from "../../../entities";
import {IsNotEmpty} from "class-validator";

export class CreateEnrollmentDto {
    @IsNotEmpty()
    student: StudentEntity

    @IsNotEmpty()
    course: CourseEntity

    @IsNotEmpty()
    classroom: ClassroomEntity

    @IsNotEmpty()
    year_level: YearLevelEntity
}
