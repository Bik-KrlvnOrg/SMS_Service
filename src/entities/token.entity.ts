import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('token')
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clientId: number;

  @Column()
  clientName: string;

  @Column({ unique: true })
  value: string;

  @Column('datetime')
  expiresAt: Date;
}