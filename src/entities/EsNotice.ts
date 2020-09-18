import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_notice", { schema: "school" })
export class EsNotice {
  @PrimaryGeneratedColumn({ type: "int", name: "es_noticeid" })
  id: number;

  @Column("varchar", { name: "es_title", length: 255 })
  title: string;

  @Column("longtext", { name: "es_message" })
  message: string;

  @Column("date", { name: "es_date" })
  date: Date;

  @Column("varchar", { name: "es_subject", length: 255 })
  subject: string;

  @BeforeInsert()
  setCurrrentDate(){
    this.date = new Date()
  }
}
