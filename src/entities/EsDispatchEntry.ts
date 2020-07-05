import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_dispatch_entry", { schema: "school" })
export class EsDispatchEntry {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "dispatchgroup" })
  dispatchgroup: number;

  @Column("date", { name: "dateofdispatch" })
  dateofdispatch: string;

  @Column("varchar", { name: "received_company", length: 255 })
  receivedCompany: string;

  @Column("text", { name: "received_address" })
  receivedAddress: string;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("text", { name: "partculars" })
  partculars: string;

  @Column("varchar", { name: "reference_no", length: 255 })
  referenceNo: string;

  @Column("varchar", { name: "recived_by", length: 255 })
  recivedBy: string;

  @Column("varchar", { name: "submited_to", length: 255 })
  submitedTo: string;

  @Column("varchar", { name: "upload_file", length: 255 })
  uploadFile: string;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("enum", {
    name: "latter_status",
    enum: ["Open", "Closed"],
    default: () => "'Closed'",
  })
  latterStatus: "Open" | "Closed";

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Delete"],
    default: () => "'Active'",
  })
  status: "Active" | "Inactive" | "Delete";

  @Column("varchar", { name: "out_sender", length: 255 })
  outSender: string;

  @Column("varchar", { name: "out_to", length: 255 })
  outTo: string;

  @Column("text", { name: "out_address" })
  outAddress: string;

  @Column("varchar", { name: "out_type", length: 255 })
  outType: string;

  @Column("varchar", { name: "out_sentthrough", length: 255 })
  outSentthrough: string;

  @Column("varchar", { name: "in_receivedthrough", length: 255 })
  inReceivedthrough: string;

  @Column("varchar", { name: "consignment_no", length: 255 })
  consignmentNo: string;

  @Column("varchar", { name: "dispatch_type", length: 255 })
  dispatchType: string;

  @Column("varchar", { name: "outward_dispatch_type", length: 255 })
  outwardDispatchType: string;

  @Column("varchar", { name: "d_letter_types", length: 255 })
  dLetterTypes: string;

  @Column("int", { name: "p_latter_id" })
  pLatterId: number;

  @Column("varchar", { name: "courrier_name", length: 255 })
  courrierName: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
