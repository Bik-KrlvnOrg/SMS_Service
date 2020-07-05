import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transport_drivers", { schema: "school" })
export class EsTransportDrivers {
  @PrimaryGeneratedColumn({ type: "int", name: "driver_id" })
  driverId: number;

  @Column("varchar", { name: "driver_license", length: 255 })
  driverLicense: string;

  @Column("varchar", { name: "issuing_authority", length: 255 })
  issuingAuthority: string;

  @Column("date", { name: "valid_date" })
  validDate: string;

  @Column("int", { name: "es_staffid" })
  esStaffid: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "license_doc", length: 255 })
  licenseDoc: string;
}
