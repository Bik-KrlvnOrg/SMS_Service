import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { AddressEntity } from './address.entity';
import { StudentEntity } from './student.entity';

@Entity({ name: 'parent' })
export class ParentEntity extends AbstractEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  contact: string;

  @Column()
  type: string;

  @Column({ default: '' })
  title: string;

  @Column()
  gender: string;

  @Column({ default: '' })
  occupation: string;

  @OneToMany(() => AddressEntity, address => address.parent)
  addresses: AddressEntity[];

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: StudentEntity;
}