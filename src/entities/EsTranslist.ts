import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_translist", { schema: "school" })
export class EsTranslist {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "route_title", length: 255 })
  routeTitle: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
