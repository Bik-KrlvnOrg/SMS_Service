import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_assignment", { schema: "school" })
export class EsAssignment {
  @PrimaryGeneratedColumn({ type: "int", name: "es_assignmentid" })
  esAssignmentid: number;

  @Column("varchar", { name: "as_name", length: 255 })
  asName: string;

  @Column("varchar", { name: "as_class", length: 255 })
  asClass: string;

  @Column("varchar", { name: "as_sec", length: 255 })
  asSec: string;

  @Column("varchar", { name: "as_suject", length: 255 })
  asSuject: string;

  @Column("date", { name: "as_lastdate" })
  asLastdate: string;

  @Column("longtext", { name: "as_description" })
  asDescription: string;

  @Column("date", { name: "as_createdon" })
  asCreatedon: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("int", { name: "as_marks" })
  asMarks: number;

  @Column("varchar", { name: "person_type", length: 255 })
  personType: string;

  @Column("int", { name: "created_by" })
  createdBy: number;
}
