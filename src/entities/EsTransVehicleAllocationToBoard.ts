import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_vehicle_allocation_to_board", { schema: "school" })
export class EsTransVehicleAllocationToBoard {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "board_id" })
  boardId: number;

  @Column("int", { name: "vehicle_id" })
  vehicleId: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
