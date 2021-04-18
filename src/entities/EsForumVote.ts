import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'es_forum_vote', schema: 'school' })
export class EsForumVote {
  @PrimaryGeneratedColumn({ name: 'id' })
  Id: number;
  @Column({ name: 'thread_id' })
  ThreadId: number;
  @Column({ name: 'post_id' })
  PostId: number;
  @Column({ name: 'up_count' })
  UpCount: number;
  @Column({ name: 'down_count' })
  DownCount: number;
}