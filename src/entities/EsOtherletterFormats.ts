import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_otherletter_formats", { schema: "school" })
export class EsOtherletterFormats {
  @PrimaryGeneratedColumn({ type: "int", name: "letter_id" })
  letterId: number;

  @Column("text", { name: "letter_title" })
  letterTitle: string;

  @Column("longtext", { name: "letter_desc" })
  letterDesc: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
