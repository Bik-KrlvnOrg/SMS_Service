import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feemaster", { schema: "school" })
export class FeesMasterEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_feemasterid" })
  id: number;

  @Column("varchar", { name: "fee_particular", length: 255 })
  particular: string;

  @Column("int", { name: "fee_class" })
  classId: number;

  @Column("double", { name: "fee_amount", precision: 22 })
  amount: number;

  @Column("int", { name: "fee_instalments" })
  instalments: number;

  @Column("varchar", { name: "fee_extra1", length: 255 })
  extra1: string;

  @Column("varchar", { name: "fee_extra2", length: 255 })
  extra2: string;

  @Column("date", { name: "fee_fromdate" })
  fromDate: string;

  @Column("date", { name: "fee_todate" })
  toDate: string;
}
