import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { YearLevelEntity } from './year-level.entity';

@Entity({ name: 'exam' })
export class ExamEntity extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  start_date: Date;

  @OneToOne(() => YearLevelEntity)
  @JoinColumn({ name: 'year_level_id', referencedColumnName: 'id' })
  year: YearLevelEntity;

}