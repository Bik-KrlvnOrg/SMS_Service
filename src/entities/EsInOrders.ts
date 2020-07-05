import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_in_orders", { schema: "school" })
export class EsInOrders {
  @PrimaryGeneratedColumn({ type: "int", name: "es_in_ordersid" })
  esInOrdersid: number;

  @Column("varchar", { name: "in_suplier_name", length: 255 })
  inSuplierName: string;

  @Column("longtext", { name: "in_items_purchased" })
  inItemsPurchased: string;

  @Column("datetime", { name: "order_date" })
  orderDate: Date;

  @Column("int", { name: "in_rec_note_no" })
  inRecNoteNo: number;

  @Column("datetime", { name: "in_rec_date" })
  inRecDate: Date;

  @Column("varchar", { name: "in_rec_bill_no", length: 255 })
  inRecBillNo: string;

  @Column("longtext", { name: "in_items_recieved" })
  inItemsRecieved: string;

  @Column("float", { name: "in_tot_amnt", precision: 12 })
  inTotAmnt: number;

  @Column("enum", { name: "in_ord_status", enum: ["pending", "complete"] })
  inOrdStatus: "pending" | "complete";

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";
}
