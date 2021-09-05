import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { CourseEntity } from './course.entity';

@Entity({ name: 'subject' })
export class SubjectEntity extends AbstractEntity {
  @Column()
  name: string;

  @OneToOne(() => CourseEntity)
  @JoinColumn({ name: 'course_id', referencedColumnName: 'id' })
  course: CourseEntity;

  @Column()
  max_capacity: number;
}