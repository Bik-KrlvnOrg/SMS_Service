import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_modules_alloted", { schema: "school" })
export class EsModulesAlloted {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "max_no_courses", length: 255 })
  maxNoCourses: string;

  @Column("varchar", { name: "max_no_students", length: 255 })
  maxNoStudents: string;

  @Column("varchar", { name: "modules_permissions", length: 255 })
  modulesPermissions: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
