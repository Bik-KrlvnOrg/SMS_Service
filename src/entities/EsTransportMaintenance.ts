import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transport_maintenance", { schema: "school" })
export class EsTransportMaintenance {
  @PrimaryGeneratedColumn({ type: "int", name: "es_transport_maintenanceid" })
  esTransportMaintenanceid: number;

  @Column("varchar", { name: "tr_transportid", length: 255 })
  trTransportid: string;

  @Column("varchar", { name: "tr_maintenance_type", length: 255 })
  trMaintenanceType: string;

  @Column("datetime", { name: "tr_date_of_maintenance" })
  trDateOfMaintenance: Date;

  @Column("double", { name: "tr_amount_paid", precision: 22 })
  trAmountPaid: number;

  @Column("varchar", { name: "tr_remarks", length: 255 })
  trRemarks: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("varchar", { name: "tr_transportno", length: 255 })
  trTransportno: string;

  @Column("varchar", { name: "tr_transportname", length: 255 })
  trTransportname: string;

  @Column("varchar", { name: "es_ledger", length: 255 })
  esLedger: string;
}
