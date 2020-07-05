import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_inventory", { schema: "school" })
export class EsInventory {
  @PrimaryGeneratedColumn({ type: "int", name: "es_inventoryid" })
  esInventoryid: number;

  @Column("varchar", { name: "in_inventory_name", length: 255 })
  inInventoryName: string;

  @Column("varchar", { name: "in_short_name", length: 255 })
  inShortName: string;

  @Column("varchar", { name: "in_description", length: 255 })
  inDescription: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";
}
