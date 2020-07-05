import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_subscribers", { schema: "school" })
export class MlcSubscribers {
  @PrimaryGeneratedColumn({ type: "int", name: "subid" })
  subid: number;

  @Column("varchar", { name: "sub_email", length: 255 })
  subEmail: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("datetime", { name: "created_on", nullable: true })
  createdOn: Date | null;
}
