import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_bookissue", { schema: "school" })
export class EsBookissue {
  @PrimaryGeneratedColumn({ type: "int", name: "es_bookissueid" })
  esBookissueid: number;

  @Column("int", { name: "bki_id" })
  bkiId: number;

  @Column("int", { name: "bki_bookid" })
  bkiBookid: number;

  @Column("varchar", { name: "issuetype", length: 255 })
  issuetype: string;

  @Column("date", { name: "issuedate" })
  issuedate: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
