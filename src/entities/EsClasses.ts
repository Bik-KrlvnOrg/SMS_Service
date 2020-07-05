import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_classes", { schema: "school" })
export class EsClasses {
  @PrimaryGeneratedColumn({ type: "int", name: "es_classesid" })
  esClassesid: number;

  @Column("varchar", { name: "es_classname", length: 255 })
  esClassname: string;

  @Column("int", { name: "es_orderby" })
  esOrderby: number;

  @Column("int", { name: "es_schoolid" })
  esSchoolid: number;

  @Column("int", { name: "es_groupid" })
  esGroupid: number;
}
