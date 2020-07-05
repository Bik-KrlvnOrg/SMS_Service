import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_marks", { schema: "school" })
export class EsMarks {
  @PrimaryGeneratedColumn({ type: "int", name: "es_marksid" })
  esMarksid: number;

  @Column("int", { name: "es_examdetailsid" })
  esExamdetailsid: number;

  @Column("int", { name: "es_marksstudentid" })
  esMarksstudentid: number;

  @Column("varchar", {
    name: "es_marksobtined",
    length: 255,
    default: () => "'0'",
  })
  esMarksobtined: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive";
}
