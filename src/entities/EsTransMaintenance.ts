import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_maintenance", { schema: "school" })
export class EsTransMaintenance {
  @PrimaryGeneratedColumn({ type: "int", name: "es_transport_maintenanceid" })
  esTransportMaintenanceid: number;

  @Column("varchar", { name: "tr_transportid", length: 255 })
  trTransportid: string;

  @Column("varchar", { name: "tr_maintenance_type", length: 255 })
  trMaintenanceType: string;

  @Column("date", { name: "tr_date_of_maintenance" })
  trDateOfMaintenance: string;

  @Column("double", { name: "tr_amount_paid", precision: 22 })
  trAmountPaid: number;

  @Column("varchar", { name: "tr_remarks", length: 255 })
  trRemarks: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
