import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'address_type' })
export class AddressTypeEntity extends AbstractEntity {
  @Column()
  name: string;
}