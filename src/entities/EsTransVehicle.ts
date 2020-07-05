import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_vehicle", { schema: "school" })
export class EsTransVehicle {
  @PrimaryGeneratedColumn({ type: "int", name: "es_transportid" })
  esTransportid: number;

  @Column("enum", {
    name: "tr_transport_type",
    enum: [
      "bus",
      "Car(Manual)",
      "Car(Auto)",
      "coach",
      "minibus",
      "van",
      "other",
    ],
  })
  trTransportType:
    | "bus"
    | "Car(Manual)"
    | "Car(Auto)"
    | "coach"
    | "minibus"
    | "van"
    | "other";

  @Column("date", { name: "tr_purchase_date" })
  trPurchaseDate: string;

  @Column("varchar", { name: "tr_transport_name", length: 255 })
  trTransportName: string;

  @Column("varchar", { name: "tr_vehicle_no", length: 255 })
  trVehicleNo: string;

  @Column("date", { name: "tr_insurance_date" })
  trInsuranceDate: string;

  @Column("date", { name: "tr_ins_renewal_date" })
  trInsRenewalDate: string;

  @Column("int", { name: "tr_seating_capacity" })
  trSeatingCapacity: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";
}
