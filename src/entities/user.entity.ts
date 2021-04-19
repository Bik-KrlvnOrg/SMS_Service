import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserStatusEntity } from './user-status.entity';

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @OneToOne(() => UserStatusEntity)
  @JoinColumn({ name: 'user_status_id', referencedColumnName: 'id' })
  status: UserStatusEntity;
}