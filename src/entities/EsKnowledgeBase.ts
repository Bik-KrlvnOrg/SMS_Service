import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_knowledge_base", { schema: "school" })
export class EsKnowledgeBase {
  @PrimaryGeneratedColumn({ type: "int", name: "es_knowledge_baseid" })
  esKnowledgeBaseid: number;

  @Column("varchar", { name: "kb_category", length: 255 })
  kbCategory: string;

  @Column("text", { name: "kb_description" })
  kbDescription: string;

  @Column("datetime", { name: "kb_date" })
  kbDate: Date;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("int", { name: "parent_id", default: () => "'0'" })
  parentId: number;

  @Column("int", { name: "created_by" })
  createdBy: number;
}
