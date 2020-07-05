import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_attend_staff", { schema: "school" })
export class EsAttendStaff {
  @PrimaryGeneratedColumn({ type: "int", name: "es_attend_staffid" })
  esAttendStaffid: number;

  @Column("varchar", { name: "at_staff_dept", length: 255 })
  atStaffDept: string;

  @Column("datetime", { name: "at_staff_date" })
  atStaffDate: Date;

  @Column("varchar", { name: "at_staff_id", length: 255 })
  atStaffId: string;

  @Column("varchar", { name: "at_staff_name", length: 255 })
  atStaffName: string;

  @Column("varchar", { name: "at_staff_desig", length: 255 })
  atStaffDesig: string;

  @Column("varchar", { name: "at_staff_attend", length: 255 })
  atStaffAttend: string;

  @Column("varchar", { name: "at_staff_remarks", length: 255 })
  atStaffRemarks: string;
}
