import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_deductionmaster", { schema: "school" })
export class EsDeductionmaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_deductionmasterid" })
  esDeductionmasterid: number;

  @Column("varchar", { name: "ded_post", length: 255 })
  dedPost: string;

  @Column("varchar", { name: "ded_type", length: 255 })
  dedType: string;

  @Column("date", { name: "ded_fromdate" })
  dedFromdate: string;

  @Column("date", { name: "ded_todate" })
  dedTodate: string;

  @Column("varchar", { name: "ded_amount", length: 255 })
  dedAmount: string;

  @Column("varchar", { name: "ded_amt_type", length: 255 })
  dedAmtType: string;

  @Column("varchar", { name: "ded_dept", length: 255 })
  dedDept: string;
}
