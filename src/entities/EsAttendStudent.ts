import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_attend_student", { schema: "school" })
export class EsAttendStudent {
  @PrimaryGeneratedColumn({ type: "int", name: "es_attend_studentid" })
  esAttendStudentid: number;

  @Column("varchar", { name: "at_std_group", length: 255 })
  atStdGroup: string;

  @Column("varchar", { name: "at_std_class", length: 255 })
  atStdClass: string;

  @Column("datetime", { name: "at_attendance_date" })
  atAttendanceDate: Date;

  @Column("varchar", { name: "at_std_subject", length: 255 })
  atStdSubject: string;

  @Column("int", { name: "at_std_period" })
  atStdPeriod: number;

  @Column("int", { name: "at_period_from" })
  atPeriodFrom: number;

  @Column("int", { name: "at_period_to" })
  atPeriodTo: number;

  @Column("varchar", { name: "at_reg_no", length: 255 })
  atRegNo: string;

  @Column("varchar", { name: "at_stud_name", length: 255 })
  atStudName: string;

  @Column("varchar", { name: "at_attendance", length: 255 })
  atAttendance: string;

  @Column("varchar", { name: "at_remarks", length: 255 })
  atRemarks: string;
}
