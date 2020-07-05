import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_timetablemaster", { schema: "school" })
export class EsTimetablemaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_timetablemasterid" })
  esTimetablemasterid: number;

  @Column("varchar", { name: "es_class", length: 255 })
  esClass: string;

  @Column("varchar", { name: "es_staffid", length: 255 })
  esStaffid: string;

  @Column("varchar", { name: "es_subject", length: 255 })
  esSubject: string;

  @Column("varchar", { name: "es_teachername", length: 255 })
  esTeachername: string;
}
