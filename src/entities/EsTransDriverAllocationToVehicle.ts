import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_driver_allocation_to_vehicle", { schema: "school" })
export class EsTransDriverAllocationToVehicle {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "driver_id" })
  driverId: number;

  @Column("int", { name: "vehicle_id" })
  vehicleId: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("datetime", { name: "created_on" })
  createdOn: Date;
}
