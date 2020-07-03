import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_videogallery", { schema: "school" })
export class EsVideogallery {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "image_path", length: 255 })
  imagePath: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
