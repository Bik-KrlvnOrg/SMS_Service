import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_timetable_subjects", { schema: "school" })
export class EsTimetableSubjects {
  @PrimaryGeneratedColumn({ type: "int", name: "ts_id" })
  tsId: number;

  @Column("int", { name: "classid" })
  classid: number;

  @Column("varchar", { name: "subjectname", length: 255 })
  subjectname: string;
}
