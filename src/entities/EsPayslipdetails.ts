import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_payslipdetails", { schema: "school" })
export class EsPayslipdetails {
  @PrimaryGeneratedColumn({ type: "int", name: "es_payslipdetailsid" })
  esPayslipdetailsid: number;

  @Column("int", { name: "staff_id" })
  staffId: number;

  @Column("date", { name: "pay_month" })
  payMonth: string;

  @Column("float", { name: "basic_salary", precision: 12 })
  basicSalary: number;

  @Column("float", { name: "tot_allowance", precision: 12 })
  totAllowance: number;

  @Column("float", { name: "tot_deductions", precision: 12 })
  totDeductions: number;

  @Column("float", { name: "net_salary", precision: 12 })
  netSalary: number;

  @Column("varchar", { name: "balance", length: 255 })
  balance: string;

  @Column("varchar", { name: "leavedays", length: 255 })
  leavedays: string;

  @Column("varchar", { name: "totalleave", length: 255 })
  totalleave: string;

  @Column("varchar", { name: "voucherid", length: 255 })
  voucherid: string;
}
