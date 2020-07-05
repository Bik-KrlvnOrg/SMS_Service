import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_libfine", { schema: "school" })
export class EsLibfine {
  @PrimaryGeneratedColumn({ type: "int", name: "es_libfineid" })
  esLibfineid: number;

  @Column("varchar", { name: "es_libfinenoofdays", length: 255 })
  esLibfinenoofdays: string;

  @Column("varchar", { name: "es_libfineamount", length: 255 })
  esLibfineamount: string;

  @Column("varchar", { name: "es_libfineduration", length: 255 })
  esLibfineduration: string;

  @Column("varchar", { name: "es_libfinefor", length: 255 })
  esLibfinefor: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive";
}
