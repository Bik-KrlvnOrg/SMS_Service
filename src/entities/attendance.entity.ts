import { AbstractEntity } from './abstract-entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { SemesterEntity } from './semester.entity';
import { StudentEntity } from './student.entity';
import { TutorEntity } from './tutor.entity';
import { SubjectEntity } from './subject.entity';

@Entity({ name: 'attendance' })
export class AttendanceEntity extends AbstractEntity {
  @Column()
  status: string;

  @Column()
  month: string;

  @ManyToMany(() => SemesterEntity)
  @JoinTable({
    name: 'subject_attendance',
    joinColumn: { name: 'subject_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'attendance_id', referencedColumnName: 'id' },
  })
  subject: SubjectEntity[];

  @ManyToMany(() => SemesterEntity)
  @JoinTable({
    name: 'semester_attendance',
    joinColumn: { name: 'semester_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'attendance_id', referencedColumnName: 'id' },
  })
  semester: SemesterEntity[];

  @ManyToMany(() => StudentEntity)
  @JoinTable({
    name: 'student_attendance',
    joinColumn: { name: 'student_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'attendance_id', referencedColumnName: 'id' },
  })
  student: StudentEntity[];

  @ManyToMany(() => TutorEntity)
  @JoinTable({
    name: 'tutor_attendance',
    joinColumn: { name: 'tutor_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'attendance_id', referencedColumnName: 'id' },
  })
  tutor: TutorEntity[];

}