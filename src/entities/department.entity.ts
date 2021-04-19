import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'department' })
export class DepartmentEntity extends AbstractEntity {
  @Column()
  name: string;
}