import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_voucherentry", { schema: "school" })
export class VoucherEntryEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_voucherentryid" })
  id: number;

  @Column("varchar", { name: "es_vouchertype", length: 255 })
  voucherType: string;

  @Column("varchar", { name: "es_receiptno", length: 255 })
  receiptNo: string;

  @Column("date", { name: "es_receiptdate" })
  receiptDate: Date;

  @Column("varchar", { name: "es_paymentmode", length: 255 })
  paymentMode: string;

  @Column("varchar", { name: "es_bankacc", length: 255 })
  bankAccount: string;

  @Column("varchar", { name: "es_particulars", length: 255 })
  particulars: string;

  @Column("double", { name: "es_amount", precision: 22 })
  amount: number;

  @Column("longtext", { name: "es_narration" })
  narration: string;

  @Column("varchar", { name: "es_vouchermode", length: 255 })
  voucherMode: string;

  @Column("varchar", { name: "es_checkno", length: 255 })
  chequeNo: string;

  @Column("bigint", { name: "es_teller_number" })
  tellerNumber: number;

  @Column("bigint", { name: "es_bank_pin" })
  bankPin: number;

  @Column("varchar", { name: "es_bank_name", length: 255 })
  bankName: string;

  @Column("date", { name: "ve_fromfinance" })
  fromfinanceDate: Date;

  @Column("date", { name: "ve_tofinance" })
  tofinanceDate: Date;

  @BeforeInsert()
  setDefault(){
    this.receiptDate = new Date()
  }
}
