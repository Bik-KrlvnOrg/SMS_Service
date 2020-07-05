import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_exam", { schema: "school" })
export class EsExam {
  @PrimaryGeneratedColumn({ type: "int", name: "es_examid" })
  esExamid: number;

  @Column("varchar", { name: "es_examname", length: 255 })
  esExamname: string;

  @Column("int", { name: "es_examordby" })
  esExamordby: number;
}
