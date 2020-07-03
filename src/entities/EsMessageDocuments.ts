import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_message_documents", { schema: "school" })
export class EsMessageDocuments {
  @PrimaryGeneratedColumn({ type: "bigint", name: "doc_id" })
  docId: string;

  @Column("bigint", { name: "es_messagesid" })
  esMessagesid: string;

  @Column("varchar", { name: "message_doc", length: 255 })
  messageDoc: string;
}
