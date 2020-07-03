import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_notice", { schema: "school" })
export class EsNotice {
  @PrimaryGeneratedColumn({ type: "int", name: "es_noticeid" })
  esNoticeid: number;

  @Column("varchar", { name: "es_title", length: 255 })
  esTitle: string;

  @Column("longtext", { name: "es_message" })
  esMessage: string;

  @Column("date", { name: "es_date" })
  esDate: string;

  @Column("varchar", { name: "es_subject", length: 255 })
  esSubject: string;
}
