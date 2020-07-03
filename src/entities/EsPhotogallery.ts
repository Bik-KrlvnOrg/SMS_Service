import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_photogallery", { schema: "school" })
export class EsPhotogallery {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "pid" })
  pid: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "image_path", length: 255 })
  imagePath: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
