import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_shortlisted", { schema: "school" })
export class EsShortlisted {
  @PrimaryGeneratedColumn({ type: "int", name: "es_shortlistedid" })
  esShortlistedid: number;

  @Column("longtext", { name: "stl_message" })
  stlMessage: string;
}
