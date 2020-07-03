import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_expcerti", { schema: "school" })
export class EsExpcerti {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "staff_id" })
  staffId: number;

  @Column("varchar", { name: "staff_name", length: 255 })
  staffName: string;

  @Column("varchar", { name: "gender", length: 255 })
  gender: string;

  @Column("varchar", { name: "father_name", length: 255 })
  fatherName: string;

  @Column("varchar", { name: "post", length: 255 })
  post: string;

  @Column("varchar", { name: "aced_year", length: 255 })
  acedYear: string;

  @Column("varchar", { name: "doj", length: 255 })
  doj: string;

  @Column("varchar", { name: "charac", length: 255 })
  charac: string;

  @Column("varchar", { name: "status", length: 255 })
  status: string;

  @Column("varchar", { name: "created_on", length: 255 })
  createdOn: string;

  @Column("varchar", { name: "conduct", length: 255 })
  conduct: string;

  @Column("varchar", { name: "dept", length: 255 })
  dept: string;
}
