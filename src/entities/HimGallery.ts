import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_gallery", { schema: "school" })
export class HimGallery {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
