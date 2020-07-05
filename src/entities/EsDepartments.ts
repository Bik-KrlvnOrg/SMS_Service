import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_departments", { schema: "school" })
export class EsDepartments {
  @PrimaryGeneratedColumn({ type: "int", name: "es_departmentsid" })
  esDepartmentsid: number;

  @Column("varchar", { name: "es_deptname", length: 255 })
  esDeptname: string;

  @Column("int", { name: "es_orderby" })
  esOrderby: number;

  @Column("int", { name: "es_groupid" })
  esGroupid: number;
}
