import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_hostel_health", { schema: "school" })
export class EsHostelHealth {
  @PrimaryGeneratedColumn({ type: "int", name: "es_hostel_healthid" })
  esHostelHealthid: number;

  @Column("int", { name: "health_regno" })
  healthRegno: number;

  @Column("varchar", { name: "health_name", length: 255 })
  healthName: string;

  @Column("varchar", { name: "health_class", length: 255 })
  healthClass: string;

  @Column("varchar", { name: "health_section", length: 255 })
  healthSection: string;

  @Column("varchar", { name: "health_problem", length: 255 })
  healthProblem: string;

  @Column("varchar", { name: "health_doctorname", length: 255 })
  healthDoctorname: string;

  @Column("varchar", { name: "health_address", length: 255 })
  healthAddress: string;

  @Column("int", { name: "health_contactno" })
  healthContactno: number;

  @Column("varchar", { name: "health_prescription", length: 255 })
  healthPrescription: string;

  @Column("int", { name: "es_personid" })
  esPersonid: number;

  @Column("varchar", { name: "es_persontpe", length: 255 })
  esPersontpe: string;

  @Column("date", { name: "es_createdon" })
  esCreatedon: string;
}
