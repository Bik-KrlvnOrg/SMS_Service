import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'forum_thread' })
export class Forum_threadEntity extends AbstractEntity {
  @Column()
  title: string;
  
}