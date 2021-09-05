import {Column, Entity} from 'typeorm';
import {AbstractEntity} from './abstract-entity';

@Entity({ name: 'permission' })
export class PermissionEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
}