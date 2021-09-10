import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne} from 'typeorm';
import {AbstractEntity} from './abstract-entity';
import {AddressEntity} from './address.entity';
import {UserEntity} from "./user.entity";
import {SubjectEntity} from "./subject.entity";

@Entity({name: 'tutor'})
export class TutorEntity extends AbstractEntity {
    @Column()
    first_name: string;

    @Column({name: 'middle_name', default: ''})
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    contact: string;

    @Column({nullable: true})
    email: string;

    @Column()
    gender: string;

    @Column({name: 'date_of_birth', nullable: true})
    dob: Date;

    @ManyToMany(() => AddressEntity, {cascade: true, eager: true})
    @JoinTable({
        name: 'tutor_addresses',
        joinColumn: {
            name: 'tutor_id', referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'address_id', referencedColumnName: 'id',
        },
    })
    addresses: AddressEntity[];

    @OneToOne(() => UserEntity, {cascade: true})
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user: UserEntity;

    @ManyToMany(() => SubjectEntity, {cascade: true, eager: true})
    @JoinTable(
        {
            name: 'tutor_subjects',
            joinColumns: [{name: 'tutor_id', referencedColumnName: 'id'}],
            inverseJoinColumns: [{name: 'subject_id', referencedColumnName: 'id'}]
        }
    )
    subjects: SubjectEntity[]
}