import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_tcstudent", { schema: "school" })
export class EsTcstudent {
  @PrimaryGeneratedColumn({ type: "int", name: "es_tcstudentid" })
  esTcstudentid: number;

  @Column("longtext", { name: "tcm_description" })
  tcmDescription: string;
}
