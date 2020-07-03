import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_fee_inst_last_date", { schema: "school" })
export class EsFeeInstLastDate {
  @PrimaryGeneratedColumn({ type: "int", name: "inst_id" })
  instId: number;

  @Column("int", { name: "es_finance_masterid" })
  esFinanceMasterid: number;

  @Column("int", { name: "instalment_no" })
  instalmentNo: number;

  @Column("date", { name: "last_date" })
  lastDate: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
