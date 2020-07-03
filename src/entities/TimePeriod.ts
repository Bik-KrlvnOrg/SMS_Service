import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("time_period", { schema: "school" })
export class TimePeriod {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "period_id" })
  periodId: number;

  @Column("varchar", { name: "from_p", length: 255 })
  fromP: string;

  @Column("varchar", { name: "to_p", length: 255 })
  toP: string;
}
