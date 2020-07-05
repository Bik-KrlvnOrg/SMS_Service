import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_in_category", { schema: "school" })
export class EsInCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "es_in_categoryid" })
  esInCategoryid: number;

  @Column("varchar", { name: "in_category_name", length: 255 })
  inCategoryName: string;

  @Column("varchar", { name: "in_description", length: 255 })
  inDescription: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";
}
