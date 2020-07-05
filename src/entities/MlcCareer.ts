import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_career", { schema: "school" })
export class MlcCareer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "first", length: 255 })
  first: string;

  @Column("varchar", { name: "last", length: 255 })
  last: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "resume", length: 255 })
  resume: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
