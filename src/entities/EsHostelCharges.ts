import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_hostel_charges", { schema: "school" })
export class EsHostelCharges {
  @PrimaryGeneratedColumn({ type: "int", name: "es_hostel_charges_id" })
  esHostelChargesId: number;

  @Column("int", { name: "es_roomallotmentid" })
  esRoomallotmentid: number;

  @Column("int", { name: "es_hostelbuldid" })
  esHostelbuldid: number;

  @Column("int", { name: "es_personid" })
  esPersonid: number;

  @Column("varchar", { name: "es_persontype", length: 255 })
  esPersontype: string;

  @Column("date", { name: "due_month" })
  dueMonth: string;

  @Column("double", { name: "room_rate", precision: 22 })
  roomRate: number;

  @Column("double", { name: "amount_paid", precision: 22 })
  amountPaid: number;

  @Column("double", { name: "deduction", precision: 22 })
  deduction: number;

  @Column("double", { name: "balance", precision: 22 })
  balance: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "father", length: 255 })
  father: string;

  @Column("date", { name: "paid_on" })
  paidOn: string;

  @Column("text", { name: "remarks" })
  remarks: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
