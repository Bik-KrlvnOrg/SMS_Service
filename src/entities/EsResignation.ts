import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_resignation", { schema: "school" })
export class EsResignation {
  @PrimaryGeneratedColumn({ type: "int", name: "es_resignationid" })
  esResignationid: number;

  @Column("longtext", { name: "res_letter" })
  resLetter: string;
}
