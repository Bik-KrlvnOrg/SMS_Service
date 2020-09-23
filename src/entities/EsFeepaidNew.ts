import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid_new", { schema: "school" })
export class FeePaidNewEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "fid" })
  id: number;

  @Column("int", { name: "es_preadmissionid" })
  studentId: number;

  @Column("int", { name: "financemaster_id" })
  financeMasterId: number;

  @Column("int", { name: "class_id" })
  classId: number;

  @Column("varchar", { name: "total_amount", length: 255 })
  totalAmount: string;

  @Column("varchar", { name: "paid", length: 255 })
  paid: string;

  @Column("varchar", { name: "balance", length: 255 })
  balance: string;

  @Column("date", { name: "paid_on" })
  paidOn: Date;

  @Column("int", { name: "voucherid" })
  voucherId: number;

  @BeforeInsert()
  setDefault() {
    this.paidOn = new Date()
  }
}
