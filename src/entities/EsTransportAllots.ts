import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transport_allots", { schema: "school" })
export class EsTransportAllots {
  @PrimaryGeneratedColumn({ type: "int", name: "driver_allot_id" })
  driverAllotId: number;

  @Column("int", { name: "es_staffid" })
  esStaffid: number;

  @Column("int", { name: "es_transportid" })
  esTransportid: number;

  @Column("date", { name: "driver_alloted_date", nullable: true })
  driverAllotedDate: string | null;

  @Column("date", { name: "deallocate_date" })
  deallocateDate: string;

  @Column("enum", { name: "status", enum: ["Allocated", "Deallocated"] })
  status: "Allocated" | "Deallocated";
}
