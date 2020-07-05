import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_knowledge_articles", { schema: "school" })
export class EsKnowledgeArticles {
  @PrimaryGeneratedColumn({ type: "int", name: "es_knowledge_articlesid" })
  esKnowledgeArticlesid: number;

  @Column("int", { name: "kb_category_id" })
  kbCategoryId: number;

  @Column("varchar", { name: "kb_article_name", length: 255 })
  kbArticleName: string;

  @Column("text", { name: "kb_article_desc" })
  kbArticleDesc: string;

  @Column("datetime", { name: "kb_article_date" })
  kbArticleDate: Date;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("varchar", { name: "kb_priority", length: 255 })
  kbPriority: string;

  @Column("bigint", { name: "kb_views" })
  kbViews: string;

  @Column("int", { name: "created_by" })
  createdBy: number;

  @Column("varchar", { name: "person_type", length: 255 })
  personType: string;
}
