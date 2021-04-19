import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'forum_status' })
export class ForumStatusEntity extends AbstractEntity {
  @Column()
  name: string;
}