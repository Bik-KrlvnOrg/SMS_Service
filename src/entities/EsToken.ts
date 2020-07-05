import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('es_token', { schema: 'school' })
export class EsToken {
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
