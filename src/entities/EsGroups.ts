import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_groups", { schema: "school" })
export class EsGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "es_groupsid" })
  esGroupsid: number;

  @Column("varchar", { name: "es_groupname", length: 255 })
  esGroupname: string;

  @Column("int", { name: "es_grouporderby" })
  esGrouporderby: number;
}
