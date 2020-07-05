import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_download", { schema: "school" })
export class MlcDownload {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "document", length: 255 })
  document: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
