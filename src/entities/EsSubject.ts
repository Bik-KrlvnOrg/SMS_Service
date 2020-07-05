import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_subject", { schema: "school" })
export class EsSubject {
  @PrimaryGeneratedColumn({ type: "int", name: "es_subjectid" })
  esSubjectid: number;

  @Column("varchar", { name: "es_subjectname", length: 255 })
  esSubjectname: string;

  @Column("varchar", { name: "es_subjectcode", length: 255 })
  esSubjectcode: string;

  @Column("varchar", { name: "es_subjectshortname", length: 255 })
  esSubjectshortname: string;
}
