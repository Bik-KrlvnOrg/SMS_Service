import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_document", { schema: "school" })
export class MlcDocument {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "document", length: 255 })
  document: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
