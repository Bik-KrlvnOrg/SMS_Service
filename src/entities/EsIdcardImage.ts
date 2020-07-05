import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_idcard_image", { schema: "school" })
export class EsIdcardImage {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "horizontal_image", length: 255 })
  horizontalImage: string;

  @Column("varchar", { name: "vertical_image", length: 255 })
  verticalImage: string;
}
