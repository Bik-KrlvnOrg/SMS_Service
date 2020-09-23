import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_fine_charged_collected", { schema: "school" })
export class FineCollectedEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_fcc_id" })
  id: number;

  @Column("int", { name: "studentid" })
  studentid: number;

  @Column("int", { name: "class" })
  classId: number;

  @Column("int", { name: "es_feemasterid" })
  feeMasterId: number;

  @Column("double", { name: "fine_amount", precision: 22 })
  fineAmount: number;

  @Column("double", { name: "amount_paid", precision: 22 })
  amountPaid: number;

  @Column("double", { name: "deduction_allowed", precision: 22 })
  deductionAllowed: number;

  @Column("int", { name: "es_installment" })
  installment: number;

  @Column("date", { name: "date" })
  createdDate: Date;

  @Column("date", { name: "fi_fromdate" })
  fromDate: Date;

  @Column("date", { name: "fi_todate" })
  todate: Date;

  @Column("int", { name: "es_voucherentryid" })
  voucherEntryId: number;

  @BeforeInsert()
  setDefaults() {
    this.createdDate = new Date()
  }
}
