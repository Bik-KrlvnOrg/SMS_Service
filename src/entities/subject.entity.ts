import {AbstractEntity} from './abstract-entity';
import {Column, Entity} from 'typeorm';

@Entity({name: 'subject'})
export class SubjectEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column()
    max_capacity: number;
}