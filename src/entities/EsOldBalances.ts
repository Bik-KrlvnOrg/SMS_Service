import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_old_balances", { schema: "school" })
export class EsOldBalances {
  @PrimaryGeneratedColumn({ type: "int", name: "ob_id" })
  obId: number;

  @Column("int", { name: "studentid" })
  studentid: number;

  @Column("varchar", { name: "old_balance", length: 255 })
  oldBalance: string;

  @Column("varchar", { name: "paid_amount", length: 255 })
  paidAmount: string;

  @Column("varchar", { name: "wived_amount", length: 255 })
  wivedAmount: string;

  @Column("date", { name: "last_paid_dt" })
  lastPaidDt: string;

  @Column("varchar", { name: "balance", length: 255 })
  balance: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
