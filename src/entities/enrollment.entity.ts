import {AbstractEntity} from "./abstract-entity";
import {StudentEntity} from "./student.entity";
import {CourseEntity} from "./course.entity";
import {ClassroomEntity} from "./classroom.entity";
import {Entity, JoinColumn, OneToOne} from "typeorm";
import {YearLevelEntity} from "./year-level.entity";

@Entity({name: 'enrollment'})
export class EnrollmentEntity extends AbstractEntity {
    @OneToOne(() => StudentEntity, {cascade: true, eager: true})
    @JoinColumn({
        name: 'student_id',
        referencedColumnName: 'id'
    })
    student: StudentEntity

    @OneToOne(() => CourseEntity, {cascade: true})
    @JoinColumn({
        name: 'course_id',
        referencedColumnName: 'id'
    })
    course: CourseEntity

    @OneToOne(() => ClassroomEntity, {cascade: true, eager: true})
    @JoinColumn({
        name: 'classroom_id',
        referencedColumnName: 'id'
    })
    classroom: ClassroomEntity

    @OneToOne(() => YearLevelEntity, {cascade: true, eager: true})
    @JoinColumn({
        name: 'year_level_id',
        referencedColumnName: 'id'
    })
    year_level: YearLevelEntity

}
