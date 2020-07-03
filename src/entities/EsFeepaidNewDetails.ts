import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid_new_details", { schema: "school" })
export class EsFeepaidNewDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "fp_det_id" })
  fpDetId: number;

  @Column("int", { name: "fid" })
  fid: number;

  @Column("varchar", { name: "particulars", length: 255 })
  particulars: string;

  @Column("varchar", { name: "amount", length: 255 })
  amount: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
