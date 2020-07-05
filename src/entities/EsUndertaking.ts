import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_undertaking", { schema: "school" })
export class EsUndertaking {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "sno" })
  sno: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("varchar", { name: "student_name", length: 222 })
  studentName: string;

  @Column("varchar", { name: "father_name", length: 222 })
  fatherName: string;

  @Column("varchar", { name: "mother_name", length: 222 })
  motherName: string;

  @Column("varchar", { name: "class_name", length: 222 })
  className: string;

  @Column("varchar", { name: "section", length: 222 })
  section: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("varchar", { name: "hobbies", length: 255 })
  hobbies: string;
}
