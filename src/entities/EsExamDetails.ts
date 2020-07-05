import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_exam_details", { schema: "school" })
export class EsExamDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "es_exam_detailsid" })
  esExamDetailsid: number;

  @Column("int", { name: "academicexam_id" })
  academicexamId: number;

  @Column("int", { name: "subject_id" })
  subjectId: number;

  @Column("datetime", { name: "exam_date" })
  examDate: Date;

  @Column("varchar", { name: "exam_duration", length: 255 })
  examDuration: string;

  @Column("int", { name: "total_marks" })
  totalMarks: number;

  @Column("int", { name: "pass_marks" })
  passMarks: number;

  @Column("longtext", { name: "upload_exam_paper" })
  uploadExamPaper: string;
}
