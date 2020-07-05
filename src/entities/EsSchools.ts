import { Column, Entity } from "typeorm";

@Entity("es_schools", { schema: "school" })
export class EsSchools {
  @Column("int", { primary: true, name: "Sr.No." })
  srNo: number;

  @Column("int", { name: "school_id" })
  schoolId: number;

  @Column("varchar", { name: "school_name", length: 100 })
  schoolName: string;

  @Column("int", { name: "group_id" })
  groupId: number;
}
