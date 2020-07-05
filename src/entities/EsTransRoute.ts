import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_route", { schema: "school" })
export class EsTransRoute {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "route_title", length: 255 })
  routeTitle: string;

  @Column("text", { name: "route_Via" })
  routeVia: string;

  @Column("double", { name: "amount", precision: 22 })
  amount: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
