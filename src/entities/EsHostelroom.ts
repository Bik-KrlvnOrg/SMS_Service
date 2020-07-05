import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_hostelroom", { schema: "school" })
export class EsHostelroom {
  @PrimaryGeneratedColumn({ type: "int", name: "es_hostelroomid" })
  esHostelroomid: number;

  @Column("varchar", { name: "room_type", length: 255 })
  roomType: string;

  @Column("int", { name: "room_capacity" })
  roomCapacity: number;

  @Column("int", { name: "room_vacancy" })
  roomVacancy: number;

  @Column("varchar", { name: "room_no", length: 255 })
  roomNo: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive"],
    default: () => "'active'",
  })
  status: "active" | "inactive";

  @Column("varchar", { name: "buld_name", length: 255 })
  buldName: string;

  @Column("int", { name: "es_hostelbuldid", nullable: true })
  esHostelbuldid: number | null;

  @Column("double", { name: "room_rate", precision: 22 })
  roomRate: number;
}
