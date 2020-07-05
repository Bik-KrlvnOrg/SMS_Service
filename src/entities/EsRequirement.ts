import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_requirement", { schema: "school" })
export class EsRequirement {
  @PrimaryGeneratedColumn({ type: "int", name: "es_requirementid" })
  esRequirementid: number;

  @Column("varchar", { name: "es_post", length: 255 })
  esPost: string;

  @Column("varchar", { name: "es_depatname", length: 255 })
  esDepatname: string;

  @Column("varchar", { name: "es_qualification", length: 255 })
  esQualification: string;

  @Column("varchar", { name: "es_experience", length: 255 })
  esExperience: string;

  @Column("int", { name: "es_noofpositions" })
  esNoofpositions: number;

  @Column("date", { name: "es_date_posteddate" })
  esDatePosteddate: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";
}
