import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_book_reservation", { schema: "school" })
export class EsBookReservation {
  @PrimaryGeneratedColumn({ type: "bigint", name: "reserv_id" })
  reservId: string;

  @Column("bigint", { name: "staff_or_student_id" })
  staffOrStudentId: string;

  @Column("bigint", { name: "book_id" })
  bookId: string;

  @Column("enum", { name: "reservetype", enum: ["student", "staff"] })
  reservetype: "student" | "staff";

  @Column("date", { name: "reserved_on" })
  reservedOn: string;

  @Column("date", { name: "expired_on" })
  expiredOn: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";
}
