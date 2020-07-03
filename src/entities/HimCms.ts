import { Column, Entity } from "typeorm";

@Entity("him_cms", { schema: "school" })
export class HimCms {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "meta_title", length: 255 })
  metaTitle: string;

  @Column("varchar", { name: "meta_keyword", length: 255 })
  metaKeyword: string;

  @Column("varchar", { name: "meta_description", length: 255 })
  metaDescription: string;

  @Column("varchar", { name: "document1", length: 255 })
  document1: string;

  @Column("varchar", { name: "document2", length: 255 })
  document2: string;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("varchar", { name: "header_image", length: 255 })
  headerImage: string;

  @Column("text", { name: "videocode" })
  videocode: string;

  @Column("varchar", { name: "back_ground_image", length: 255 })
  backGroundImage: string;
}
