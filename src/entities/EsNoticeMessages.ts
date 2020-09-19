import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_notice_messages", { schema: "school" })
export class EsNoticeMessages {
  @PrimaryGeneratedColumn({ type: "int", name: "es_messagesid" })
  id: number;

  @Column("int", { name: "from_id" })
  fromId: number;

  @Column("varchar", { name: "from_type", length: 255 })
  fromType: string;

  @Column("int", { name: "to_id" })
  toId: number;

  @Column("varchar", { name: "to_type", length: 255 })
  toType: string;

  @Column("text", { name: "subject" })
  subject: string;

  @Column("longtext", { name: "message" })
  message: string;

  @Column("datetime", { name: "created_on" })
  createdOn: Date;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("enum", {
    name: "from_status",
    enum: ["active", "inactive", "deleted"],
  })
  fromStatus: "active" | "inactive" | "deleted";

  @Column("enum", {
    name: "to_status",
    enum: ["active", "inactive", "deleted"],
  })
  toStatus: "active" | "inactive" | "deleted";

  @Column("enum", {
    name: "replay_status",
    enum: ["notreplied", "replied"],
    default: () => "'notreplied'",
  })
  replyStatus: "notreplied" | "replied";

  @Column("bigint", { name: "replied_message_id" })
  repliedMessageId: number;

  @Column("enum", {
    name: "read_status",
    enum: ["Unread", "Read"],
    default: () => "'Unread'",
  })
  readStatus: "Unread" | "Read";

  @BeforeInsert()
  setCreatedDate() {
    this.createdOn = new Date()
  }
}
