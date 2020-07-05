import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid", { schema: "school" })
export class EsFeepaid {
  @PrimaryGeneratedColumn({ type: "int", name: "es_feepaidid" })
  esFeepaidid: number;

  @Column("int", { name: "studentid" })
  studentid: number;

  @Column("varchar", { name: "class", length: 255 })
  class: string;

  @Column("int", { name: "particularid" })
  particularid: number;

  @Column("varchar", { name: "particulartname", length: 255 })
  particulartname: string;

  @Column("float", { name: "feeamount", precision: 12 })
  feeamount: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("varchar", { name: "academicyear", length: 255 })
  academicyear: string;

  @Column("varchar", { name: "comments", length: 255 })
  comments: string;

  @Column("int", { name: "es_installment" })
  esInstallment: number;

  @Column("date", { name: "fi_fromdate" })
  fiFromdate: string;

  @Column("date", { name: "fi_todate" })
  fiTodate: string;

  @Column("int", { name: "es_voucherentryid" })
  esVoucherentryid: number;

  @Column("varchar", { name: "fee_waived", length: 255 })
  feeWaived: string;
}
