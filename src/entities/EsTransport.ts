import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transport", { schema: "school" })
export class EsTransport {
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

  @Column("datetime", { name: "tr_purchase_date" })
  trPurchaseDate: Date;

  @Column("varchar", { name: "tr_transport_no", length: 255 })
  trTransportNo: string;

  @Column("varchar", { name: "tr_transport_name", length: 255 })
  trTransportName: string;

  @Column("varchar", { name: "tr_vehicle_no", length: 255 })
  trVehicleNo: string;

  @Column("datetime", { name: "tr_insurance_date" })
  trInsuranceDate: Date;

  @Column("datetime", { name: "tr_ins_renewal_date" })
  trInsRenewalDate: Date;

  @Column("int", { name: "tr_seating_capacity" })
  trSeatingCapacity: number;

  @Column("varchar", { name: "tr_route", length: 255 })
  trRoute: string;

  @Column("varchar", { name: "tr_route_from", length: 255 })
  trRouteFrom: string;

  @Column("varchar", { name: "tr_route_to", length: 255 })
  trRouteTo: string;

  @Column("varchar", { name: "tr_route_via", length: 255 })
  trRouteVia: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";
}
