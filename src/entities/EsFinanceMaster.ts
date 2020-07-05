import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_finance_master", { schema: "school" })
export class EsFinanceMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_finance_masterid" })
  esFinanceMasterid: number;

  @Column("date", { name: "fi_startdate" })
  fiStartdate: string;

  @Column("date", { name: "fi_enddate" })
  fiEnddate: string;

  @Column("text", { name: "fi_address" })
  fiAddress: string;

  @Column("varchar", { name: "fi_currency", length: 255 })
  fiCurrency: string;

  @Column("varchar", { name: "fi_symbol", length: 255 })
  fiSymbol: string;

  @Column("varchar", { name: "fi_email", length: 255 })
  fiEmail: string;

  @Column("float", { name: "fi_initialbalance", precision: 12 })
  fiInitialbalance: number;

  @Column("varchar", { name: "fi_phoneno", length: 255 })
  fiPhoneno: string;

  @Column("varchar", { name: "fi_school_logo", length: 255 })
  fiSchoolLogo: string;

  @Column("varchar", { name: "fi_website", length: 255 })
  fiWebsite: string;

  @Column("date", { name: "fi_ac_startdate" })
  fiAcStartdate: string;

  @Column("date", { name: "fi_ac_enddate" })
  fiAcEnddate: string;

  @Column("varchar", { name: "fi_schoolname", length: 255 })
  fiSchoolname: string;

  @Column("varchar", { name: "fi_endclass", length: 255 })
  fiEndclass: string;
}
