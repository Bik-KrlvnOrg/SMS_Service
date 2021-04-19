import { AbstractEntity } from './abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user_status' })
export class UserStatusEntity extends AbstractEntity {
  @Column()
  name: string;

}