import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ClassroomEntity } from './classroom.entity';
import { SubjectEntity } from './subject.entity';
import { TutorEntity } from './tutor.entity';

@Entity({ name: 'class' })
export class ClassEntity extends AbstractEntity {
  @Column()
  period: number;

  @Column()
  time: Date;

  @ManyToOne(() => ClassroomEntity)
  @JoinColumn({ name: 'classroom_id', referencedColumnName: 'id' })
  classroom: ClassroomEntity;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id', referencedColumnName: 'id' })
  subject: SubjectEntity;

  @ManyToOne(() => TutorEntity)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: TutorEntity;

}