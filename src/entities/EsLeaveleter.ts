import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_leaveleter", { schema: "school" })
export class EsLeaveleter {
  @PrimaryGeneratedColumn({ type: "int", name: "es_leaveleterid" })
  esLeaveleterid: number;

  @Column("longtext", { name: "leave_msg" })
  leaveMsg: string;
}
