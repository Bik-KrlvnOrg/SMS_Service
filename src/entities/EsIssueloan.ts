import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_issueloan", { schema: "school" })
export class EsIssueloan {
  @PrimaryGeneratedColumn({ type: "int", name: "es_issueloanid" })
  esIssueloanid: number;

  @Column("int", { name: "es_staffid" })
  esStaffid: number;

  @Column("int", { name: "es_loanmasterid" })
  esLoanmasterid: number;

  @Column("float", { name: "loan_intrestrate", precision: 12 })
  loanIntrestrate: number;

  @Column("float", { name: "loan_amount", precision: 12 })
  loanAmount: number;

  @Column("int", { name: "loan_instalments" })
  loanInstalments: number;

  @Column("date", { name: "deductionmonth" })
  deductionmonth: string;

  @Column("float", { name: "dud_amount", precision: 12 })
  dudAmount: number;

  @Column("float", { name: "amountpaidtillnow", precision: 12 })
  amountpaidtillnow: number;

  @Column("int", { name: "noofinstalmentscompleted" })
  noofinstalmentscompleted: number;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("varchar", { name: "voucherid", length: 255 })
  voucherid: string;
}
