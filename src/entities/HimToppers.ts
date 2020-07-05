import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_toppers", { schema: "school" })
export class HimToppers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "status", length: 255 })
  status: string;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("text", { name: "details" })
  details: string;

  @Column("enum", {
    name: "select_front",
    enum: ["selected", "notselected"],
    default: () => "'notselected'",
  })
  selectFront: "selected" | "notselected";
}
