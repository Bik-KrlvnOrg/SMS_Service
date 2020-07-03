import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_fine_master", { schema: "school" })
export class EsFineMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_fine_masterid" })
  esFineMasterid: number;

  @Column("float", { name: "fine_amount", precision: 12 })
  fineAmount: number;

  @Column("enum", { name: "fine_type", enum: ["Percentage", "Amount"] })
  fineType: "Percentage" | "Amount";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
