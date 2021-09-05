import {Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import {AbstractEntity} from './abstract-entity';
import {PermissionEntity} from "./permission.entity";

@Entity({name: 'role'})
export class RoleEntity extends AbstractEntity {
    @Column()
    name: string;
    @Column({nullable: true})
    description: string;

    @ManyToMany(() => PermissionEntity, {eager: true, cascade: true})
    @JoinTable(
        {
            name: 'role_permission',
            joinColumns: [{name: 'role_id', referencedColumnName: 'id'}],
            inverseJoinColumns: [{name: 'permission_id', referencedColumnName: 'id'}]
        }
    )
    permissions: PermissionEntity[]
}