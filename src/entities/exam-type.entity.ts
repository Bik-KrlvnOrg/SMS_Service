import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'exam_type' })
export class ExamTypeEntity extends AbstractEntity {
  @Column()
  name: string;

  @Column({ default: '' })
  description?: string;
}