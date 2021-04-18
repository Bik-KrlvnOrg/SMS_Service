import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'es_forum_category' })
export class EsForumCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn({ name: 'created_at' })
  CreatedAt: Date;
  @UpdateDateColumn({ name: 'modified_at' })
  ModifiedAt: Date;
}