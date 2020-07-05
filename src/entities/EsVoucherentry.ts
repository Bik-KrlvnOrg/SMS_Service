import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_voucherentry", { schema: "school" })
export class EsVoucherentry {
  @PrimaryGeneratedColumn({ type: "int", name: "es_voucherentryid" })
  esVoucherentryid: number;

  @Column("varchar", { name: "es_vouchertype", length: 255 })
  esVouchertype: string;

  @Column("varchar", { name: "es_receiptno", length: 255 })
  esReceiptno: string;

  @Column("date", { name: "es_receiptdate" })
  esReceiptdate: string;

  @Column("varchar", { name: "es_paymentmode", length: 255 })
  esPaymentmode: string;

  @Column("varchar", { name: "es_bankacc", length: 255 })
  esBankacc: string;

  @Column("varchar", { name: "es_particulars", length: 255 })
  esParticulars: string;

  @Column("double", { name: "es_amount", precision: 22 })
  esAmount: number;

  @Column("longtext", { name: "es_narration" })
  esNarration: string;

  @Column("varchar", { name: "es_vouchermode", length: 255 })
  esVouchermode: string;

  @Column("varchar", { name: "es_checkno", length: 255 })
  esCheckno: string;

  @Column("bigint", { name: "es_teller_number" })
  esTellerNumber: string;

  @Column("bigint", { name: "es_bank_pin" })
  esBankPin: string;

  @Column("varchar", { name: "es_bank_name", length: 255 })
  esBankName: string;

  @Column("date", { name: "ve_fromfinance" })
  veFromfinance: string;

  @Column("date", { name: "ve_tofinance" })
  veTofinance: string;
}
