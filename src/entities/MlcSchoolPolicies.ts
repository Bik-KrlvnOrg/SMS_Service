import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_school_policies", { schema: "school" })
export class MlcSchoolPolicies {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
