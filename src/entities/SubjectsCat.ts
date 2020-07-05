import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subjects_cat", { schema: "school" })
export class SubjectsCat {
  @PrimaryGeneratedColumn({ type: "int", name: "scat_id" })
  scatId: number;

  @Column("int", { name: "classid" })
  classid: number;

  @Column("varchar", { name: "scat_name", length: 255 })
  scatName: string;

  @Column("varchar", { name: "subject_id_array", length: 255 })
  subjectIdArray: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
