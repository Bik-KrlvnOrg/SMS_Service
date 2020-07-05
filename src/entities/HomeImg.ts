import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("home_img", { schema: "school" })
export class HomeImg {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "home_img", length: 225 })
  homeImg: string;
}
