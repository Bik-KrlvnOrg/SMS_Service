import {AbstractEntity} from './abstract-entity';
import {Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import {SubjectEntity} from "./subject.entity";

@Entity({name: 'course'})
export class CourseEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    capacity: number

    @Column({nullable: true})
    description: string


    @ManyToMany(() => SubjectEntity, {cascade: true, eager: true})
    @JoinTable(
        {
            name: 'course_subjects',
            joinColumns: [{name: 'course_id', referencedColumnName: 'id'}],
            inverseJoinColumns: [{name: 'subject_id', referencedColumnName: 'id'}]
        }
    )
    subjects: SubjectEntity[]
}