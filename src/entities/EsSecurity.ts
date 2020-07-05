import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_security", { schema: "school" })
export class EsSecurity {
  @PrimaryGeneratedColumn({ type: "int", name: "es_securityid" })
  esSecurityid: number;

  @Column("varchar", { name: "sec_name", length: 255 })
  secName: string;

  @Column("varchar", { name: "sec_address", length: 255 })
  secAddress: string;

  @Column("varchar", { name: "sec_contact_person", length: 255 })
  secContactPerson: string;

  @Column("varchar", { name: "sec_vehicle_no", length: 255 })
  secVehicleNo: string;

  @Column("varchar", { name: "sec_purpose", length: 255 })
  secPurpose: string;

  @Column("varchar", { name: "sec_mode_app", length: 255 })
  secModeApp: string;

  @Column("datetime", { name: "sec_time_out" })
  secTimeOut: Date;

  @Column("varchar", { name: "sec_remarks", length: 255 })
  secRemarks: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("datetime", { name: "sec_time_in" })
  secTimeIn: Date;

  @Column("varchar", { name: "sec_colour", length: 255 })
  secColour: string;

  @Column("varchar", { name: "sec_make_vehicle", length: 255 })
  secMakeVehicle: string;

  @Column("varchar", { name: "sec_reg_no", length: 255 })
  secRegNo: string;

  @Column("varchar", { name: "sec_phone", length: 255 })
  secPhone: string;

  @Column("varchar", { name: "sec_mobile", length: 255 })
  secMobile: string;
}
