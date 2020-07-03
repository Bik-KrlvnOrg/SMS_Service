import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid_new", { schema: "school" })
export class EsFeepaidNew {
  @PrimaryGeneratedColumn({ type: "int", name: "fid" })
  fid: number;

  @Column("int", { name: "es_preadmissionid" })
  esPreadmissionid: number;

  @Column("int", { name: "financemaster_id" })
  financemasterId: number;

  @Column("int", { name: "class_id" })
  classId: number;

  @Column("varchar", { name: "total_amount", length: 255 })
  totalAmount: string;

  @Column("varchar", { name: "paid", length: 255 })
  paid: string;

  @Column("varchar", { name: "balance", length: 255 })
  balance: string;

  @Column("date", { name: "paid_on" })
  paidOn: string;

  @Column("int", { name: "voucherid" })
  voucherid: number;
}
