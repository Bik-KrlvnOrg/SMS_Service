import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_new_timetable", { schema: "school" })
export class EsNewTimetable {
  @PrimaryGeneratedColumn({ type: "int", name: "new_time_id" })
  newTimeId: number;

  @Column("int", { name: "class_id" })
  classId: number;

  @Column("int", { name: "period_id" })
  periodId: number;

  @Column("int", { name: "subject_id" })
  subjectId: number;

  @Column("int", { name: "staff_id" })
  staffId: number;
}
