import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_allowencemaster", { schema: "school" })
export class EsAllowencemaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_allowencemasterid" })
  esAllowencemasterid: number;

  @Column("varchar", { name: "alw_post", length: 255 })
  alwPost: string;

  @Column("varchar", { name: "alw_type", length: 255 })
  alwType: string;

  @Column("date", { name: "alw_fromdate" })
  alwFromdate: string;

  @Column("date", { name: "alw_todate" })
  alwTodate: string;

  @Column("varchar", { name: "alw_amount", length: 255 })
  alwAmount: string;

  @Column("varchar", { name: "alw_amt_type", length: 255 })
  alwAmtType: string;

  @Column("varchar", { name: "alw_dept", length: 255 })
  alwDept: string;
}
