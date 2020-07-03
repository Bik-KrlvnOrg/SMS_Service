import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_sections", { schema: "school" })
export class EsSections {
  @PrimaryGeneratedColumn({ type: "int", name: "section_id" })
  sectionId: number;

  @Column("varchar", { name: "section_name", length: 255 })
  sectionName: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
