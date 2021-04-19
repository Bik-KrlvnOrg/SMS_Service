import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { StudentEntity } from './student.entity';
import { TutorEntity } from './tutor.entity';
import { ForumStatusEntity } from './forum-status.entity';
import { Forum_threadEntity } from './forum_thread.entity';

@Entity({ name: 'forum_post' })
export class Forum_postEntity extends AbstractEntity {
  @Column({ type: 'text' })
  content: string;

  @OneToOne(() => ForumStatusEntity)
  @JoinColumn({ name: 'forum_status_id', referencedColumnName: 'id' })
  status: ForumStatusEntity;

  @ManyToOne(() => Forum_threadEntity)
  @JoinColumn({ name: 'forum_thread_id', referencedColumnName: 'id' })
  thread: Forum_threadEntity;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: StudentEntity;

  @ManyToOne(() => TutorEntity)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: TutorEntity;
}