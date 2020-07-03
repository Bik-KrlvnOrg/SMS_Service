import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_applyteacher", { schema: "school" })
export class HimApplyteacher {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "aname", length: 222 })
  aname: string;

  @Column("varchar", { name: "fname", length: 222 })
  fname: string;

  @Column("varchar", { name: "mname", length: 222 })
  mname: string;

  @Column("text", { name: "resident" })
  resident: string;

  @Column("varchar", { name: "postapplied", length: 222 })
  postapplied: string;

  @Column("varchar", { name: "classes", length: 222 })
  classes: string;

  @Column("text", { name: "teachingsub" })
  teachingsub: string;

  @Column("text", { name: "experience" })
  experience: string;

  @Column("varchar", { name: "nameinstitue", length: 222 })
  nameinstitue: string;

  @Column("varchar", { name: "hobbies", length: 222 })
  hobbies: string;

  @Column("text", { name: "tellus" })
  tellus: string;

  @Column("varchar", { name: "salery", length: 222 })
  salery: string;

  @Column("varchar", { name: "landlineno", length: 222 })
  landlineno: string;

  @Column("varchar", { name: "mobileno", length: 222 })
  mobileno: string;

  @Column("varchar", { name: "email", length: 222 })
  email: string;

  @Column("text", { name: "corrosponding" })
  corrosponding: string;

  @Column("varchar", { name: "photo", length: 222 })
  photo: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("varchar", { name: "downloadapp", length: 222 })
  downloadapp: string;
}
