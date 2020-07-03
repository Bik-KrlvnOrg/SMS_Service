import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_in_item_master", { schema: "school" })
export class EsInItemMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "es_in_item_masterid" })
  esInItemMasterid: number;

  @Column("varchar", { name: "in_item_code", length: 255 })
  inItemCode: string;

  @Column("varchar", { name: "in_item_name", length: 255 })
  inItemName: string;

  @Column("bigint", { name: "cost" })
  cost: string;

  @Column("int", { name: "in_inventory_id" })
  inInventoryId: number;

  @Column("int", { name: "in_category_id" })
  inCategoryId: number;

  @Column("float", { name: "in_qty_available", precision: 12 })
  inQtyAvailable: number;

  @Column("float", { name: "in_reorder_level", precision: 12 })
  inReorderLevel: number;

  @Column("float", {
    name: "in_quantity_issued",
    precision: 12,
    default: () => "'0'",
  })
  inQuantityIssued: number;

  @Column("datetime", { name: "in_last_recieved_date" })
  inLastRecievedDate: Date;

  @Column("datetime", { name: "in_last_issued_date" })
  inLastIssuedDate: Date;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("varchar", { name: "in_units", length: 255 })
  inUnits: string;

  @Column("varchar", { name: "test", length: 255 })
  test: string;

  @Column("varchar", { name: "test1", length: 255 })
  test1: string;
}
