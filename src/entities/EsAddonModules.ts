import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_addon_modules", { schema: "school" })
export class EsAddonModules {
  @PrimaryGeneratedColumn({ type: "bigint", name: "addon_id" })
  addonId: string;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "link" })
  link: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "v_admin", length: 255 })
  vAdmin: string;

  @Column("varchar", { name: "v_staff", length: 255 })
  vStaff: string;

  @Column("varchar", { name: "v_n_staff", length: 255 })
  vNStaff: string;

  @Column("varchar", { name: "v_student", length: 255 })
  vStudent: string;

  @Column("bigint", { name: "created_by" })
  createdBy: string;

  @Column("varchar", {
    name: "created_type",
    length: 255,
    default: () => "'admin'",
  })
  createdType: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
