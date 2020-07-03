import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feemaster", { schema: "school" })
export class EsFeemaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_feemasterid" })
  esFeemasterid: number;

  @Column("varchar", { name: "fee_particular", length: 255 })
  feeParticular: string;

  @Column("int", { name: "fee_class" })
  feeClass: number;

  @Column("double", { name: "fee_amount", precision: 22 })
  feeAmount: number;

  @Column("int", { name: "fee_instalments" })
  feeInstalments: number;

  @Column("varchar", { name: "fee_extra1", length: 255 })
  feeExtra1: string;

  @Column("varchar", { name: "fee_extra2", length: 255 })
  feeExtra2: string;

  @Column("date", { name: "fee_fromdate" })
  feeFromdate: string;

  @Column("date", { name: "fee_todate" })
  feeTodate: string;
}
