import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { AddressEntity } from './address.entity';
import { ParentEntity } from './parent.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'student' })
export class StudentEntity extends AbstractEntity {
  @Column({ name: 'first_name' })
  first_name: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'middle_name', default: '' })
  middle_name: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  gender: string;

  @Column({ name: 'date_of_birth' })
  dob: Date;

  @ManyToMany(() => AddressEntity, { cascade: true })
  @JoinTable({
    name: 'student_addresses',
    joinColumn: {
      name: 'student_id', referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'address_id', referencedColumnName: 'id',
    },
  })
  addresses: AddressEntity[];

  @OneToMany(() => ParentEntity,
    parent => parent.student, { eager: true, cascade: true })
  parents: ParentEntity[];

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

}