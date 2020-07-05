import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_stationary_payment", { schema: "school" })
export class EsStationaryPayment {
  @PrimaryGeneratedColumn({ type: "bigint", name: "st_pay_id" })
  stPayId: string;

  @Column("bigint", { name: "student_id" })
  studentId: string;

  @Column("varchar", { name: "invoice_no", length: 255 })
  invoiceNo: string;

  @Column("bigint", { name: "total_amount" })
  totalAmount: string;

  @Column("bigint", { name: "waived_amount" })
  waivedAmount: string;

  @Column("bigint", { name: "paid_amount" })
  paidAmount: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["Paid", "Pending"],
    default: () => "'Pending'",
  })
  payStatus: "Paid" | "Pending";

  @Column("date", { name: "saled_date" })
  saledDate: string;

  @Column("date", { name: "paid_date" })
  paidDate: string;
}
