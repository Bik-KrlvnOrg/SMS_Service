import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'course' })
export class CourseEntity extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  capacity:number

}