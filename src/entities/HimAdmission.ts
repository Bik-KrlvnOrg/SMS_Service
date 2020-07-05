import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_admission", { schema: "school" })
export class HimAdmission {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
