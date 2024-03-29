import {AbstractEntity} from './abstract-entity';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne} from 'typeorm';
import {UserStatusEntity} from './user-status.entity';
import {RoleEntity} from './role.entity';
import {UserDetails} from '../module/user/interface';
import {Exclude} from 'class-transformer';
import {RolePermission} from "../module/security/interface";

@Entity({name: 'user'})
export class UserEntity extends AbstractEntity implements UserDetails {
    @Column({name: 'first_name', nullable: true})
    firstName: string;
    @Column({name: 'last_name', nullable: true})
    lastName: string;
    @Column({name: 'middle_name', nullable: true})
    middleName: string;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    @Exclude({toPlainOnly: true})
    password: string;
    @OneToOne(() => UserStatusEntity)
    @JoinColumn({name: 'user_status_id', referencedColumnName: 'id'})
    status: UserStatusEntity;
    @ManyToMany(() => RoleEntity, {eager: true})
    @JoinTable({
        name: 'users_roles',
        joinColumn: {name: 'user_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'role_id', referencedColumnName: 'id'},
    })
    role: RoleEntity[];
    @Column({type: 'boolean', default: false})
    locked: boolean;
    @Column({type: 'boolean', default: false})
    enabled: boolean;

    getUserId(): string {
        return this.id;
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

    getRoles(): string[] {
        return this.role.map((data: RoleEntity) => data.name);
    }

    getPermissions(): RolePermission[] {
        return this.role.map((data: RoleEntity) => {
            const role = data.name
            const actions = data.permissions.map((d) => d.name)
            return {role, actions}
        });
    }
}