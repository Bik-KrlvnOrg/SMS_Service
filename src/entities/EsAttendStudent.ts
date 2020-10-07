import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AttendanceStatus } from "../libs";

@Entity("es_attend_student", { schema: "school" })
export class StudentAttendanceEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_attend_studentid" })
  id: number;

  @Column("varchar", { name: "at_std_group", length: 255 })
  group: string = "";

  @Column("varchar", { name: "at_std_class", length: 255 })
  classId: number;

  @Column("datetime", { name: "at_attendance_date" })
  createdOn: Date;

  @Column("varchar", { name: "at_std_subject", length: 255 })
  subject: string = "";

  @Column("int", { name: "at_std_period" })
  period: number = 0;

  @Column("int", { name: "at_period_from" })
  periodFrom: number = 0;

  @Column("int", { name: "at_period_to" })
  periodTo: number = 0;

  @Column("varchar", { name: "at_reg_no", length: 255 })
  studentId: number;

  @Column("varchar", { name: "at_stud_name", length: 255 })
  name: string;

  @Column("varchar", { name: "at_attendance", length: 255 })
  status: AttendanceStatus;

  @Column("varchar", { name: "at_remarks", length: 255 })
  remarks: string = "";

  @BeforeInsert()
  setDefaults() {
    this.createdOn = new Date()
  }
}
