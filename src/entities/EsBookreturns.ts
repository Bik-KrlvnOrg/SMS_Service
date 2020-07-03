import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_bookreturns", { schema: "school" })
export class EsBookreturns {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "book_id" })
  bookId: string;

  @Column("date", { name: "return_date" })
  returnDate: string;
}
