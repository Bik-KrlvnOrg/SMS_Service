import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_categorylibrary", { schema: "school" })
export class EsCategorylibrary {
  @PrimaryGeneratedColumn({ type: "int", name: "es_categorylibraryid" })
  esCategorylibraryid: number;

  @Column("varchar", { name: "lb_categoryname", length: 255 })
  lbCategoryname: string;

  @Column("longtext", { name: "lb_catdesc" })
  lbCatdesc: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive";
}
