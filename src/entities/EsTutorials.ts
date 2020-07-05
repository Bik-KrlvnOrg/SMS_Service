import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_tutorials", { schema: "school" })
export class EsTutorials {
  @PrimaryGeneratedColumn({ type: "int", name: "tut_id" })
  tutId: number;

  @Column("int", { name: "chapter_id" })
  chapterId: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "file_path", length: 255 })
  filePath: string;

  @Column("longtext", { name: "tut_desc" })
  tutDesc: string;

  @Column("longtext", { name: "lesson" })
  lesson: string;

  @Column("longtext", { name: "summary" })
  summary: string;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("enum", { name: "user_type", enum: ["admin", "staff"] })
  userType: "admin" | "staff";

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
