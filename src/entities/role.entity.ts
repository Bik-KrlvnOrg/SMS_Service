import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'role' })
export class RoleEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
}