import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_libaraypublisher", { schema: "school" })
export class EsLibaraypublisher {
  @PrimaryGeneratedColumn({ type: "int", name: "es_libaraypublisherid" })
  esLibaraypublisherid: number;

  @Column("varchar", { name: "library_publishername", length: 255 })
  libraryPublishername: string;

  @Column("varchar", { name: "library_pulisheradress", length: 255 })
  libraryPulisheradress: string;

  @Column("varchar", { name: "library_city", length: 255 })
  libraryCity: string;

  @Column("varchar", { name: "libaray_state", length: 255 })
  libarayState: string;

  @Column("varchar", { name: "libarary_country", length: 255 })
  libararyCountry: string;

  @Column("varchar", { name: "libaray_phoneno", length: 255 })
  libarayPhoneno: string;

  @Column("varchar", { name: "librray_mobileno", length: 255 })
  librrayMobileno: string;

  @Column("varchar", { name: "library_fax", length: 255 })
  libraryFax: string;

  @Column("varchar", { name: "libarary_email", length: 255 })
  libararyEmail: string;

  @Column("varchar", { name: "libarary_aditinalinformation", length: 255 })
  libararyAditinalinformation: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
