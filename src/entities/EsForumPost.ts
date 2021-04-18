import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ForumStatus } from '../module/forum/model/forum.model';

@Entity({ name: 'es_forum_post', schema: 'school' })
export class EsForumPost {
  @PrimaryGeneratedColumn({ name: 'id' })
  Id: number;
  @Column({ name: 'thread_id' })
  ThreadId: number;
  @Column({ name: 'user_account_id' })
  UserAccountId: number;
  @Column({ name: 'status', default: ForumStatus.PENDING })
  Status: ForumStatus;
}