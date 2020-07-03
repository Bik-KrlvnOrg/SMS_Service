import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_studentabsentnoti", { schema: "school" })
export class EsStudentabsentnoti {
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

  @Column("varchar", { name: "exam_name", length: 222 })
  examName: string;

  @Column("varchar", { name: "exam_date", length: 222 })
  examDate: string;

  @Column("varchar", { name: "roll_number", length: 222 })
  rollNumber: string;

  @Column("varchar", { name: "marks_obtained", length: 222 })
  marksObtained: string;

  @Column("varchar", { name: "rank", length: 222 })
  rank: string;

  @Column("date", { name: "dob" })
  dob: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("varchar", { name: "charector", length: 222 })
  charector: string;

  @Column("varchar", { name: "conduct", length: 222 })
  conduct: string;

  @Column("varchar", { name: "games", length: 222 })
  games: string;

  @Column("varchar", { name: "hobbies", length: 222 })
  hobbies: string;

  @Column("enum", { name: "gender", enum: ["male", "female"] })
  gender: "male" | "female";
}
