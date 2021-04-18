import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ForumStatus } from '../module/forum/model/forum.model';
import { EsForumCategory } from './EsForumCategory';

@Entity({ name: 'es_forum_thread', schema: 'school' })
export class EsForumThread {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_account_id' })
  userAccountId: number;
  @Column({ default: ForumStatus.PENDING })
  status: ForumStatus;
  @Column()
  subject: string;
  @ManyToOne(() => EsForumCategory, category => category.id)
  @JoinColumn()
  category: EsForumCategory;
  // @Column()
  // closed: boolean;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'modified_at' })
  modifiedAt: Date;
}