import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_leavemaster", { schema: "school" })
export class EsLeavemaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_leavemasterid" })
  esLeavemasterid: number;

  @Column("varchar", { name: "lev_post", length: 255 })
  levPost: string;

  @Column("varchar", { name: "lev_type", length: 255 })
  levType: string;

  @Column("varchar", { name: "lev_leavescount", length: 255 })
  levLeavescount: string;

  @Column("varchar", { name: "lev_carryforward", length: 255 })
  levCarryforward: string;

  @Column("varchar", { name: "lev_days", length: 255 })
  levDays: string;

  @Column("varchar", { name: "lev_enchashable", length: 255 })
  levEnchashable: string;

  @Column("varchar", { name: "lev_dept", length: 255 })
  levDept: string;

  @Column("date", { name: "lev_from_date" })
  levFromDate: string;

  @Column("date", { name: "lev_to_date" })
  levToDate: string;
}
