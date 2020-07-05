import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_college", { schema: "school" })
export class MlcCollege {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "meta_title", length: 255 })
  metaTitle: string;

  @Column("varchar", { name: "meta_keyword", length: 255 })
  metaKeyword: string;

  @Column("varchar", { name: "meta_description", length: 255 })
  metaDescription: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "header_image", length: 255 })
  headerImage: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive"] })
  status: "Active" | "Inactive";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
