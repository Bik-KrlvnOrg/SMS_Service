import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_chapters", { schema: "school" })
export class EsChapters {
  @PrimaryGeneratedColumn({ type: "int", name: "chapter_id" })
  chapterId: number;

  @Column("int", { name: "unit_id" })
  unitId: number;

  @Column("varchar", { name: "chapter_name", length: 255 })
  chapterName: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
