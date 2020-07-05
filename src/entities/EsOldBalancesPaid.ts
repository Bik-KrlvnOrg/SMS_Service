import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_old_balances_paid", { schema: "school" })
export class EsOldBalancesPaid {
  @PrimaryGeneratedColumn({ type: "int", name: "obp_id" })
  obpId: number;

  @Column("int", { name: "ob_id" })
  obId: number;

  @Column("varchar", { name: "paid_amount", length: 255 })
  paidAmount: string;

  @Column("varchar", { name: "waived_amount", length: 255 })
  waivedAmount: string;

  @Column("date", { name: "paid_on" })
  paidOn: string;
}
