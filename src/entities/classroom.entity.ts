import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'classroom' })
export class ClassroomEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  capacity: number;
  @Column()
  type: string;
}