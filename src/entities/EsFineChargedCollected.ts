import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_fine_charged_collected", { schema: "school" })
export class EsFineChargedCollected {
  @PrimaryGeneratedColumn({ type: "int", name: "es_fcc_id" })
  esFccId: number;

  @Column("int", { name: "studentid" })
  studentid: number;

  @Column("int", { name: "class" })
  class: number;

  @Column("int", { name: "es_feemasterid" })
  esFeemasterid: number;

  @Column("double", { name: "fine_amount", precision: 22 })
  fineAmount: number;

  @Column("double", { name: "amount_paid", precision: 22 })
  amountPaid: number;

  @Column("double", { name: "deduction_allowed", precision: 22 })
  deductionAllowed: number;

  @Column("int", { name: "es_installment" })
  esInstallment: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("date", { name: "fi_fromdate" })
  fiFromdate: string;

  @Column("date", { name: "fi_todate" })
  fiTodate: string;

  @Column("int", { name: "es_voucherentryid" })
  esVoucherentryid: number;
}
