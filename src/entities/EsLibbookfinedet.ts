import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_libbookfinedet", { schema: "school" })
export class EsLibbookfinedet {
  @PrimaryGeneratedColumn({ type: "int", name: "es_libbookfinedetid" })
  esLibbookfinedetid: number;

  @Column("varchar", { name: "es_libbooksid", length: 255 })
  esLibbooksid: string;

  @Column("varchar", { name: "es_libbookbwid", length: 255 })
  esLibbookbwid: string;

  @Column("varchar", { name: "es_libbookfine", length: 255 })
  esLibbookfine: string;

  @Column("varchar", { name: "es_libbookdate", length: 255 })
  esLibbookdate: string;

  @Column("varchar", { name: "es_type", length: 255 })
  esType: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive";

  @Column("varchar", { name: "es_issuetype", length: 255 })
  esIssuetype: string;

  @Column("varchar", { name: "fine_paid", length: 255 })
  finePaid: string;

  @Column("varchar", { name: "fine_deducted", length: 255 })
  fineDeducted: string;

  @Column("date", { name: "paid_on" })
  paidOn: string;

  @Column("text", { name: "remarks" })
  remarks: string;

  @Column("date", { name: "returnedon" })
  returnedon: string;
}
