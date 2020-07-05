import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_caste", { schema: "school" })
export class EsCaste {
  @PrimaryGeneratedColumn({ type: "bigint", name: "caste_id" })
  casteId: string;

  @Column("varchar", { name: "caste", length: 255 })
  caste: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
