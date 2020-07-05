import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_datasheet", { schema: "school" })
export class HimDatasheet {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "document", length: 255 })
  document: string;
}
