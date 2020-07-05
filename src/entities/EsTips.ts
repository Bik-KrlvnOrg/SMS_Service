import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_tips", { schema: "school" })
export class EsTips {
  @PrimaryGeneratedColumn({ type: "int", name: "tip_id" })
  tipId: number;

  @Column("text", { name: "message" })
  message: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("datetime", { name: "lastupdated_on" })
  lastupdatedOn: Date;
}
