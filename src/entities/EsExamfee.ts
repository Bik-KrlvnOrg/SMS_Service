import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_examfee", { schema: "school" })
export class EsExamfee {
  @PrimaryGeneratedColumn({ type: "int", name: "exam_fee_id" })
  examFeeId: number;

  @Column("int", { name: "es_preadmissionid" })
  esPreadmissionid: number;

  @Column("varchar", { name: "fine_name", length: 255 })
  fineName: string;

  @Column("double", { name: "fine_amount", precision: 22 })
  fineAmount: number;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("double", { name: "paid_amount", precision: 22 })
  paidAmount: number;

  @Column("double", { name: "deduction_allowed", precision: 22 })
  deductionAllowed: number;

  @Column("date", { name: "paid_on" })
  paidOn: string;

  @Column("double", { name: "balance", precision: 22 })
  balance: number;

  @Column("text", { name: "remarks" })
  remarks: string;

  @Column("varchar", { name: "voucherid", length: 255 })
  voucherid: string;
}
