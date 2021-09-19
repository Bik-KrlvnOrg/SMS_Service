import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne} from 'typeorm';
import {AbstractEntity} from './abstract-entity';
import {AddressEntity} from './address.entity';
import {StudentEntity} from './student.entity';
import {Gender, ParentType} from '../libs';

@Entity({name: 'parent'})
export class ParentEntity extends AbstractEntity {
    @Column({name: 'first_name'})
    first_name: string;

    @Column({name: 'last_name'})
    last_name: string;

    @Column({name: 'middle_name', default: ''})
    middle_name: string;

    @Column()
    email: string;

    @Column()
    contact: string;

    @Column()
    type: ParentType;

    @Column({default: ''})
    title: string;

    @Column()
    gender: Gender;

    @Column({default: ''})
    occupation: string;

    @ManyToMany(() => AddressEntity, {cascade: true})
    @JoinTable({
        name: 'parent_addresses',
        joinColumn: {
            name: 'parent_id', referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'address_id', referencedColumnName: 'id',
        },
    })
    addresses: AddressEntity[];

    @ManyToOne(() => StudentEntity)
    @JoinColumn({name: 'student_id', referencedColumnName: 'id'})
    student: StudentEntity;
}
