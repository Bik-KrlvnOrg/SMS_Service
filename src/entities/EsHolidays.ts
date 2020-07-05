import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_holidays", { schema: "school" })
export class EsHolidays {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("date", { name: "holiday_date" })
  holidayDate: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Deleted"] })
  status: "Active" | "Inactive" | "Deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
