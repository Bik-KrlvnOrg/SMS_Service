import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_driver_details", { schema: "school" })
export class EsTransDriverDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "driver_name", length: 255 })
  driverName: string;

  @Column("varchar", { name: "driver_addrs", length: 255 })
  driverAddrs: string;

  @Column("varchar", { name: "diver_mobile", length: 255 })
  diverMobile: string;

  @Column("varchar", { name: "driver_license", length: 255 })
  driverLicense: string;

  @Column("varchar", { name: "issuing_authority", length: 255 })
  issuingAuthority: string;

  @Column("date", { name: "valid_date" })
  validDate: string;

  @Column("int", { name: "driver_id" })
  driverId: number;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "license_doc", length: 255 })
  licenseDoc: string;
}
