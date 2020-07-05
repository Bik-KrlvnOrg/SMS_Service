import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_booklets", { schema: "school" })
export class EsBooklets {
  @PrimaryGeneratedColumn({ type: "int", name: "booklet_id" })
  bookletId: number;

  @Column("int", { name: "subject_id" })
  subjectId: number;

  @Column("varchar", { name: "book_name", length: 255 })
  bookName: string;

  @Column("varchar", { name: "book_file", length: 255 })
  bookFile: string;

  @Column("longtext", { name: "book_desc" })
  bookDesc: string;

  @Column("enum", { name: "user_type", enum: ["admin", "staff"] })
  userType: "admin" | "staff";

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
