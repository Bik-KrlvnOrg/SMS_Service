import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_sections_student", { schema: "school" })
export class EsSectionsStudent {
  @PrimaryGeneratedColumn({ type: "bigint", name: "section_student_id" })
  sectionStudentId: string;

  @Column("bigint", { name: "student_id" })
  studentId: string;

  @Column("bigint", { name: "course_id" })
  courseId: string;

  @Column("bigint", { name: "year_id" })
  yearId: string;

  @Column("varchar", { name: "roll_no", length: 255 })
  rollNo: string;

  @Column("bigint", { name: "section_id" })
  sectionId: string;
}
