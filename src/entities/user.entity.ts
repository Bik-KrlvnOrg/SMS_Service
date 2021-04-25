import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserStatusEntity } from './user-status.entity';
import { RoleEntity } from './role.entity';
import { UserDetails } from '../module/user/interface/user-details';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
export class UserEntity extends AbstractEntity implements UserDetails {
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column({ name: 'middle_name', nullable: true })
  middleName: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;
  @OneToOne(() => UserStatusEntity)
  @JoinColumn({ name: 'user_status_id', referencedColumnName: 'id' })
  status: UserStatusEntity;
  @OneToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: RoleEntity;
  @Column({ type: 'boolean', default: false })
  locked: boolean;
  @Column({ type: 'boolean', default: false })
  enabled: boolean;

  getPassword(): string {
    return this.password;
  }

  getUsername(): string {
    return this.username;
  }

  isAccountNonExpired(): boolean {
    return true;
  }

  isAccountNonLocked(): boolean {
    return !this.locked;
  }

  isCredentialsNonExpired(): boolean {
    return false;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}