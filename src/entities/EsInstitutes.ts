import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_institutes", { schema: "school" })
export class EsInstitutes {
  @PrimaryGeneratedColumn({ type: "int", name: "inst_id" })
  instId: number;

  @Column("varchar", { name: "inst_name", length: 255 })
  instName: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
