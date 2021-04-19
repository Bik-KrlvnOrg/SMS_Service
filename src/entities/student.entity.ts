import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { AddressEntity } from './address.entity';
import { ParentEntity } from './parent.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'student' })
export class StudentEntity extends AbstractEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: '' })
  middle_name: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  date_of_birth: string;

  @OneToMany(() => AddressEntity, address => address.student)
  addresses: AddressEntity[];

  @OneToMany(() => ParentEntity, parent => parent.student, { eager: true })
  parents: ParentEntity[];

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;

}