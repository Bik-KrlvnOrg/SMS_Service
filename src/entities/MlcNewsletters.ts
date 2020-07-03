import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_newsletters", { schema: "school" })
export class MlcNewsletters {
  @PrimaryGeneratedColumn({ type: "int", name: "news_id" })
  newsId: number;

  @Column("varchar", { name: "news_title", length: 255 })
  newsTitle: string;

  @Column("longtext", { name: "news_desc" })
  newsDesc: string;

  @Column("varchar", { name: "news_doc", length: 255 })
  newsDoc: string;

  @Column("enum", {
    name: "news_status",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  newsStatus: "Active" | "Inactive";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
