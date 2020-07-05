import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_loanpayment", { schema: "school" })
export class EsLoanpayment {
  @PrimaryGeneratedColumn({ type: "int", name: "es_loanpaymentid" })
  esLoanpaymentid: number;

  @Column("int", { name: "es_issueloanid" })
  esIssueloanid: number;

  @Column("float", { name: "inst_amount", precision: 12 })
  instAmount: number;

  @Column("date", { name: "onmonth" })
  onmonth: string;
}
