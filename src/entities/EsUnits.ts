import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_units", { schema: "school" })
export class EsUnits {
  @PrimaryGeneratedColumn({ type: "int", name: "unit_id" })
  unitId: number;

  @Column("int", { name: "es_classesid" })
  esClassesid: number;

  @Column("int", { name: "es_subjectid" })
  esSubjectid: number;

  @Column("varchar", { name: "unit_name", length: 255 })
  unitName: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
