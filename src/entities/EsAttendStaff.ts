import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AttendanceStatus } from "../libs";

@Entity("es_attend_staff", { schema: "school" })
export class StaffAttendanceEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_attend_staffid" })
  id: number;

  @Column("varchar", { name: "at_staff_dept", length: 255 })
  departmentId: number;

  @Column("datetime", { name: "at_staff_date" })
  createdOn: Date;

  @Column("varchar", { name: "at_staff_id", length: 255 })
  staffId: number;

  @Column("varchar", { name: "at_staff_name", length: 255 })
  name: string;

  @Column("varchar", { name: "at_staff_desig", length: 255 })
  designationId: number;

  @Column("varchar", { name: "at_staff_attend", length: 255 })
  status: AttendanceStatus;

  @Column("varchar", { name: "at_staff_remarks", length: 255 })
  remarks: string = "";

  @BeforeInsert()
  setDefaults() {
    this.createdOn = new Date()
  }
}
