import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_incharge", { schema: "school" })
export class EsIncharge {
  @PrimaryGeneratedColumn({ type: "int", name: "incharge_id" })
  inchargeId: number;

  @Column("varchar", { name: "es_classesid", length: 255 })
  esClassesid: string;

  @Column("varchar", { name: "es_staffid", length: 255 })
  esStaffid: string;

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
