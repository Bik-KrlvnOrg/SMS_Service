import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_settings", { schema: "school" })
export class HimSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "constant_name", length: 255 })
  constantName: string;

  @Column("varchar", { name: "field_value", length: 255 })
  fieldValue: string;

  @Column("varchar", { name: "field_name", length: 255 })
  fieldName: string;
}
