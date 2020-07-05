import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_in_supplier_master", { schema: "school" })
export class EsInSupplierMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_in_supplier_masterid" })
  esInSupplierMasterid: number;

  @Column("varchar", { name: "in_name", length: 255 })
  inName: string;

  @Column("varchar", { name: "in_address", length: 255 })
  inAddress: string;

  @Column("varchar", { name: "in_city", length: 255 })
  inCity: string;

  @Column("varchar", { name: "in_state", length: 255 })
  inState: string;

  @Column("varchar", { name: "in_country", length: 255 })
  inCountry: string;

  @Column("varchar", { name: "in_office_no", length: 255 })
  inOfficeNo: string;

  @Column("varchar", { name: "in_mobile_no", length: 255 })
  inMobileNo: string;

  @Column("varchar", { name: "in_email", length: 255 })
  inEmail: string;

  @Column("varchar", { name: "in_fax", length: 255 })
  inFax: string;

  @Column("varchar", { name: "in_description", length: 255 })
  inDescription: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";
}
