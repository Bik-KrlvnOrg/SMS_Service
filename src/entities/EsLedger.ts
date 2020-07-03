import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_ledger", { schema: "school" })
export class EsLedger {
  @PrimaryGeneratedColumn({ type: "int", name: "es_ledgerid" })
  esLedgerid: number;

  @Column("varchar", { name: "lg_name", length: 255 })
  lgName: string;

  @Column("varchar", { name: "lg_groupname", length: 255 })
  lgGroupname: string;

  @Column("double", { name: "lg_openingbalance", precision: 22 })
  lgOpeningbalance: number;

  @Column("date", { name: "lg_createdon" })
  lgCreatedon: string;

  @Column("varchar", { name: "lg_amounttype", length: 255 })
  lgAmounttype: string;
}
