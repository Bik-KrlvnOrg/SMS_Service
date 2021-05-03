import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'address' })
export class AddressEntity extends AbstractEntity {
  @Column({ default: '' })
  city: string;

  @Column({ default: '' })
  country: string;

  @Column({ default: '' })
  street: string;

  @Column({ default: '' })
  state: string;

  @Column({ default: '' })
  province: string;

  @Column({ name: 'zip_code', default: '' })
  zipCode: string;

  @Column({ name: 'postal_code', default: '' })
  postalCode: string;

  @Column({ default: '' })
  line1: string;

  @Column({ default: '' })
  line2: string;
}