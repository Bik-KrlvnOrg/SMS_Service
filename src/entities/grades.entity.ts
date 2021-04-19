import { Entity } from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity({ name: 'grade' })
export class GradesEntity extends AbstractEntity {

}