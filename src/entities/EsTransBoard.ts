import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_board", { schema: "school" })
export class EsTransBoard {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "route_id" })
  routeId: number;

  @Column("varchar", { name: "board_title", length: 255 })
  boardTitle: string;

  @Column("int", { name: "capacity" })
  capacity: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
