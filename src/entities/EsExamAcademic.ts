import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_exam_academic", { schema: "school" })
export class EsExamAcademic {
  @PrimaryGeneratedColumn({ type: "int", name: "es_exam_academicid" })
  esExamAcademicid: number;

  @Column("int", { name: "exam_id" })
  examId: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("int", { name: "class_id" })
  classId: number;

  @Column("varchar", { name: "academic_year", length: 255 })
  academicYear: string;

  @Column("datetime", { name: "created_date" })
  createdDate: Date;
}
