import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_feepaid", { schema: "school" })
export class FeesPaidEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_feepaidid" })
  id: number;

  @Column("int", { name: "studentid" })
  studentId: number;

  @Column("varchar", { name: "class", length: 255 })
  classId: number;

  @Column("int", { name: "particularid" })
  particularId: number;

  @Column("varchar", { name: "particulartname", length: 255 })
  particulartName: string;

  @Column("float", { name: "feeamount", precision: 12 })
  feeAmount: number;

  @Column("date", { name: "date" })
  createdDate: Date;

  @Column("varchar", { name: "academicyear", length: 255 })
  academicYear: string;

  @Column("varchar", { name: "comments", length: 255 })
  comments: string;

  @Column("int", { name: "es_installment" })
  installment: number;

  @Column("date", { name: "fi_fromdate" })
  fromDate: Date;

  @Column("date", { name: "fi_todate" })
  toDate: Date;

  @Column("int", { name: "es_voucherentryid" })
  voucherEntryId: number;

  @Column("varchar", { name: "fee_waived", length: 255 })
  waived: string;

  @BeforeInsert()
  setDefault() {
    this.waived = ""
    this.comments = ""
    this.createdDate = new Date()
    this.academicYear = this.getAcademicYear()
  }

  getAcademicYear(): string {
    return `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`
  }
}
