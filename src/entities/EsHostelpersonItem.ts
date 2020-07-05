import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_hostelperson_item", { schema: "school" })
export class EsHostelpersonItem {
  @PrimaryGeneratedColumn({ type: "int", name: "es_hostelperson_itemid" })
  esHostelpersonItemid: number;

  @Column("int", { name: "hostelperson_itemno" })
  hostelpersonItemno: number;

  @Column("int", { name: "hostelperson_itemcode" })
  hostelpersonItemcode: number;

  @Column("varchar", { name: "hostelperson_itemname", length: 255 })
  hostelpersonItemname: string;

  @Column("varchar", { name: "hostelperson_itemtype", length: 255 })
  hostelpersonItemtype: string;

  @Column("int", { name: "hostelperson_itemqty" })
  hostelpersonItemqty: number;

  @Column("int", { name: "es_personid" })
  esPersonid: number;

  @Column("datetime", { name: "hostelperson_itemissued" })
  hostelpersonItemissued: Date;

  @Column("varchar", { name: "es_persontype", length: 255 })
  esPersontype: string;

  @Column("int", { name: "es_roomallotmentid" })
  esRoomallotmentid: number;

  @Column("enum", { name: "status", enum: ["issued", "issuereturn"] })
  status: "issued" | "issuereturn";

  @Column("date", { name: "return_on" })
  returnOn: string;
}
