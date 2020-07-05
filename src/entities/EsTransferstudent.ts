import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transferstudent", { schema: "school" })
export class EsTransferstudent {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "sno", length: 222 })
  sno: string;

  @Column("varchar", { name: "name", length: 222 })
  name: string;

  @Column("varchar", { name: "fname", length: 222 })
  fname: string;

  @Column("varchar", { name: "nationality", length: 222 })
  nationality: string;

  @Column("varchar", { name: "sc", length: 222 })
  sc: string;

  @Column("varchar", { name: "dobw", length: 222 })
  dobw: string;

  @Column("date", { name: "dob" })
  dob: string;

  @Column("varchar", { name: "class_name", length: 222 })
  className: string;

  @Column("text", { name: "subject" })
  subject: string;

  @Column("date", { name: "dobp" })
  dobp: string;

  @Column("varchar", { name: "monthfeepay", length: 222 })
  monthfeepay: string;

  @Column("varchar", { name: "feecons", length: 222 })
  feecons: string;

  @Column("date", { name: "doblast" })
  doblast: string;

  @Column("date", { name: "datestuck" })
  datestuck: string;

  @Column("varchar", { name: "attendance", length: 222 })
  attendance: string;

  @Column("date", { name: "sissuecetrti" })
  sissuecetrti: string;

  @Column("text", { name: "rls" })
  rls: string;

  @Column("varchar", { name: "ncc", length: 222 })
  ncc: string;

  @Column("text", { name: "games" })
  games: string;

  @Column("varchar", { name: "conduct", length: 222 })
  conduct: string;

  @Column("varchar", { name: "acharge", length: 222 })
  acharge: string;

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("varchar", { name: "exam_date", length: 2222 })
  examDate: string;

  @Column("varchar", { name: "gender", length: 222 })
  gender: string;

  @Column("varchar", { name: "section", length: 222 })
  section: string;

  @Column("varchar", { name: "admissionno", length: 222 })
  admissionno: string;
}
