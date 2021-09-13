import {Column, Entity} from "typeorm";
import {AbstractEntity} from "./abstract-entity";

@Entity({name: 'subject_type'})
export class SubjectTypeEntity extends AbstractEntity {
    @Column()
    name: string
    @Column({nullable: true})
    description: string
}