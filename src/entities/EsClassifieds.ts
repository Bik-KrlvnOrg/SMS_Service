import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_classifieds", { schema: "school" })
export class EsClassifieds {
  @PrimaryGeneratedColumn({ type: "int", name: "es_classifiedsid" })
  esClassifiedsid: number;

  @Column("varchar", { name: "cfs_name", length: 255 })
  cfsName: string;

  @Column("varchar", { name: "cfs_modeofadds", length: 255 })
  cfsModeofadds: string;

  @Column("date", { name: "cfs_posteddate" })
  cfsPosteddate: string;

  @Column("longtext", { name: "cfs_details" })
  cfsDetails: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";
}
