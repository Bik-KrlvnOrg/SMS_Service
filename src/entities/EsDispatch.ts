import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_dispatch", { schema: "school" })
export class EsDispatch {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "dispatch_category", length: 255 })
  dispatchCategory: string;

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Delete"],
    default: () => "'Active'",
  })
  status: "Active" | "Inactive" | "Delete";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
