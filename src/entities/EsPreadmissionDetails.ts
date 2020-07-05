import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_preadmission_details", { schema: "school" })
export class EsPreadmissionDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "es_preadmission_detailsid" })
  esPreadmissionDetailsid: number;

  @Column("int", { name: "es_preadmissionid" })
  esPreadmissionid: number;

  @Column("varchar", { name: "pre_class", length: 255 })
  preClass: string;

  @Column("date", { name: "pre_fromdate" })
  preFromdate: string;

  @Column("date", { name: "pre_todate" })
  preTodate: string;

  @Column("enum", {
    name: "status",
    enum: ["pass", "fail", "resultawaiting", "inactive"],
  })
  status: "pass" | "fail" | "resultawaiting" | "inactive";

  @Column("enum", {
    name: "admission_status",
    enum: ["newadmission", "promoted"],
  })
  admissionStatus: "newadmission" | "promoted";

  @Column("int", { name: "scat_id" })
  scatId: number;
}
