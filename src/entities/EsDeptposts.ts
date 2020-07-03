import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_deptposts", { schema: "school" })
export class EsDeptposts {
  @PrimaryGeneratedColumn({ type: "int", name: "es_deptpostsid" })
  esDeptpostsid: number;

  @Column("varchar", { name: "es_postshortname", length: 255 })
  esPostshortname: string;

  @Column("varchar", { name: "es_postcode", length: 255 })
  esPostcode: string;

  @Column("varchar", { name: "es_postname", length: 255 })
  esPostname: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
