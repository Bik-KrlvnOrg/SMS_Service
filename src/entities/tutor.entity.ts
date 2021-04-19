import { Column, Entity, OneToMany } from 'typeorm';
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
  @OneToMany(() => AddressEntity, address => address.tutor)
  addresses: AddressEntity[];
}