import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_loanmaster", { schema: "school" })
export class EsLoanmaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_loanmasterid" })
  esLoanmasterid: number;

  @Column("varchar", { name: "loan_post", length: 255 })
  loanPost: string;

  @Column("varchar", { name: "loan_type", length: 255 })
  loanType: string;

  @Column("varchar", { name: "loan_name", length: 255 })
  loanName: string;

  @Column("date", { name: "loan_fromdate" })
  loanFromdate: string;

  @Column("date", { name: "loan_todate" })
  loanTodate: string;

  @Column("varchar", { name: "loan_intrestrate", length: 255 })
  loanIntrestrate: string;

  @Column("varchar", { name: "loan_maxlimit", length: 255 })
  loanMaxlimit: string;

  @Column("varchar", { name: "loan_dept", length: 255 })
  loanDept: string;
}
