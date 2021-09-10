import {Column, Entity} from 'typeorm';
import {AbstractEntity} from './abstract-entity';

@Entity({name: 'address'})
export class AddressEntity extends AbstractEntity {
    @Column()
    city: string;

    @Column()
    country: string;

    @Column({default: ''})
    street: string;

    @Column({name: 'state'})
    stateOrProvince: string;

    @Column({name: 'zip_code', default: ''})
    zipOrPostalCode: string;

}