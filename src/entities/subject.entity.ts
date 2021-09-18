import {AbstractEntity} from './abstract-entity';
import {Column, Entity, JoinColumn, OneToOne} from 'typeorm';
import {SubjectTypeEntity} from "./subject-type.entity";

@Entity({name: 'subject'})
export class SubjectEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column()
    max_capacity: number;

    @OneToOne(() => SubjectTypeEntity, {cascade: true})
    @JoinColumn({name: 'subject_type_id', referencedColumnName: 'id'})
    subjectType: SubjectTypeEntity
}