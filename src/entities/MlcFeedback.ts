import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_feedback", { schema: "school" })
export class MlcFeedback {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "first", length: 255 })
  first: string;

  @Column("varchar", { name: "last", length: 255 })
  last: string;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "comment", length: 255 })
  comment: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
