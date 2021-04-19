import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'semester' })
export class SemesterEntity extends AbstractEntity {
  @Column()
  name: string;
}