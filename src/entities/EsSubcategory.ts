import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_subcategory", { schema: "school" })
export class EsSubcategory {
  @PrimaryGeneratedColumn({ type: "int", name: "es_subcategoryid" })
  esSubcategoryid: number;

  @Column("int", { name: "subcat_catname" })
  subcatCatname: number;

  @Column("varchar", { name: "subcat_scatname", length: 255 })
  subcatScatname: string;

  @Column("longtext", { name: "subcat_scatdesc" })
  subcatScatdesc: string;

  @Column("enum", { name: "subcat_status", enum: ["active", "inactive"] })
  subcatStatus: "active" | "inactive";
}
