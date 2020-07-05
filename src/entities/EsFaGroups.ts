import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_fa_groups", { schema: "school" })
export class EsFaGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "es_fa_groupsid" })
  esFaGroupsid: number;

  @Column("varchar", { name: "fa_groupname", length: 255 })
  faGroupname: string;

  @Column("varchar", { name: "fa_undergroup", length: 255 })
  faUndergroup: string;

  @Column("int", { name: "fa_display", default: () => "'1'" })
  faDisplay: number;
}
