import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_payment_history", { schema: "school" })
export class EsTransPaymentHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "studentid" })
  studentid: number;

  @Column("date", { name: "due_month" })
  dueMonth: string;

  @Column("double", { name: "pay_amount", precision: 22 })
  payAmount: number;

  @Column("double", { name: "amount_paid", precision: 22 })
  amountPaid: number;

  @Column("double", { name: "deduction", precision: 22 })
  deduction: number;

  @Column("varchar", { name: "remarks", length: 255 })
  remarks: string;

  @Column("date", { name: "paid_on" })
  paidOn: string;

  @Column("varchar", { name: "pay_status", length: 255 })
  payStatus: string;

  @Column("datetime", { name: "created_on" })
  createdOn: Date;

  @Column("varchar", { name: "voucherid", length: 255 })
  voucherid: string;
}
