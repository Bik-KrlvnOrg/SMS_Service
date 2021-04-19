import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'year_level' })
export class YearLevelEntity extends AbstractEntity {
  @Column()
  name: string;
}