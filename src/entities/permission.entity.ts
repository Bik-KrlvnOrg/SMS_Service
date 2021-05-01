import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { RoleEntity } from './role.entity';

@Entity({ name: 'permission' })
export class PermissionEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: RoleEntity;
}