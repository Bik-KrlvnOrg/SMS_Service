import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_taxmaster", { schema: "school" })
export class EsTaxmaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_taxmasterid" })
  esTaxmasterid: number;

  @Column("varchar", { name: "tax_name", length: 255 })
  taxName: string;

  @Column("varchar", { name: "tax_percentage_type", length: 255 })
  taxPercentageType: string;

  @Column("varchar", { name: "tax_to", length: 255 })
  taxTo: string;

  @Column("varchar", { name: "tax_from", length: 255 })
  taxFrom: string;

  @Column("varchar", { name: "tax_rate", length: 255 })
  taxRate: string;

  @Column("date", { name: "tax_from_date" })
  taxFromDate: string;

  @Column("date", { name: "tax_to_date" })
  taxToDate: string;
}
