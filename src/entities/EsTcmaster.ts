import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_tcmaster", { schema: "school" })
export class EsTcmaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_tcmasterid" })
  esTcmasterid: number;

  @Column("longtext", { name: "tcm_description" })
  tcmDescription: string;
}
