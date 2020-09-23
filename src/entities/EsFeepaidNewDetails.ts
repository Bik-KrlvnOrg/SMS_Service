import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid_new_details", { schema: "school" })
export class FeePaidNewDetailsEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "fp_det_id" })
  id: number;

  @Column("int", { name: "fid" })
  feeId: number;

  @Column("varchar", { name: "particulars", length: 255 })
  particulars: string;

  @Column("varchar", { name: "amount", length: 255 })
  amount: string;

  @Column("date", { name: "created_on" })
  createdOn: Date;

  @BeforeInsert()
  setDefaults() {
    this.createdOn = new Date()
  }
}
