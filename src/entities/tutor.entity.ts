import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractEntity } from './abstract-entity';
import { AddressEntity } from './address.entity';

@Entity({ name: 'tutor' })
export class TutorEntity extends AbstractEntity {
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  email: string;
  @Column()
  contact: string;
  @ManyToMany(() => AddressEntity)
  @JoinTable({
    name: 'tutor_addresses',
    joinColumn: {
      name: 'tutor_id', referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'address_id', referencedColumnName: 'id',
    },
  })
  addresses: AddressEntity[];
}