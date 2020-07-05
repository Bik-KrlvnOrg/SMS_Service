import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_voucher", { schema: "school" })
export class EsVoucher {
  @PrimaryGeneratedColumn({ type: "int", name: "es_voucherid" })
  esVoucherid: number;

  @Column("varchar", { name: "voucher_type", length: 255 })
  voucherType: string;

  @Column("varchar", { name: "voucher_mode", length: 255 })
  voucherMode: string;
}
