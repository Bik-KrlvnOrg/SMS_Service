import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_stationary", { schema: "school" })
export class EsStationary {
  @PrimaryGeneratedColumn({ type: "bigint", name: "stationary_id" })
  stationaryId: string;

  @Column("bigint", { name: "student_id" })
  studentId: string;

  @Column("bigint", { name: "item_id" })
  itemId: string;

  @Column("bigint", { name: "st_pay_id" })
  stPayId: string;

  @Column("int", { name: "item_qty" })
  itemQty: number;

  @Column("varchar", { name: "invoice_no", length: 255 })
  invoiceNo: string;

  @Column("bigint", { name: "total_amount" })
  totalAmount: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
