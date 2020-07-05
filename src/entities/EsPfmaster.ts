import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_pfmaster", { schema: "school" })
export class EsPfmaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_pfmasterid" })
  esPfmasterid: number;

  @Column("varchar", { name: "pf_post", length: 255 })
  pfPost: string;

  @Column("float", { name: "pf_empcont", precision: 12 })
  pfEmpcont: number;

  @Column("varchar", { name: "pf_empconttype", length: 255 })
  pfEmpconttype: string;

  @Column("float", { name: "pf_empycont", precision: 12 })
  pfEmpycont: number;

  @Column("varchar", { name: "pf_empyconttype", length: 255 })
  pfEmpyconttype: string;

  @Column("varchar", { name: "pf_dept", length: 255 })
  pfDept: string;

  @Column("date", { name: "pf_from_date" })
  pfFromDate: string;

  @Column("date", { name: "pf_to_date" })
  pfToDate: string;
}
