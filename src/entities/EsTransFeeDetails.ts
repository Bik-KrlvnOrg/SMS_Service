import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_fee_details", { schema: "school" })
export class EsTransFeeDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "class_id" })
  classId: number;

  @Column("double", { name: "amount", precision: 22 })
  amount: number;

  @Column("enum", { name: "installment_type", enum: ["monthly", "yearly"] })
  installmentType: "monthly" | "yearly";

  @Column("date", { name: "fee_fromdate" })
  feeFromdate: string;

  @Column("date", { name: "fee_todate" })
  feeTodate: string;

  @Column("int", { name: "financial_year" })
  financialYear: number;
}
