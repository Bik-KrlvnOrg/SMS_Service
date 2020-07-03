import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_userlogs", { schema: "school" })
export class EsUserlogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("mediumint", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "table_name", length: 255 })
  tableName: string;

  @Column("varchar", { name: "module", length: 255 })
  module: string;

  @Column("varchar", { name: "submodule", length: 255 })
  submodule: string;

  @Column("int", { name: "record_id" })
  recordId: number;

  @Column("text", { name: "action" })
  action: string;

  @Column("varchar", { name: "ipaddress", length: 255 })
  ipaddress: string;

  @Column("datetime", { name: "posted_on" })
  postedOn: Date;
}
