import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { StudentEntity } from './student.entity';
import { ParentEntity } from './parent.entity';
import { TutorEntity } from './tutor.entity';

@Entity({ name: 'address' })
export class AddressEntity extends AbstractEntity {
  @Column({ default: '' })
  city: string;

  @Column({ default: '' })
  country: string;

  @Column({ default: '' })
  street: string;

  @Column({ default: '' })
  state: string;

  @Column({ default: '' })
  province: string;

  @Column({ default: '' })
  zip_code: string;

  @Column({ default: '' })
  postal_code: string;

  @Column({ default: '' })
  line1: string;

  @Column({ default: '' })
  line2: string;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: StudentEntity;

  @ManyToOne(() => ParentEntity)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: ParentEntity;

  @ManyToOne(() => TutorEntity)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: TutorEntity;
}