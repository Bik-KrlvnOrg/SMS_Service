import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_hostelbuld", { schema: "school" })
export class EsHostelbuld {
  @PrimaryGeneratedColumn({ type: "int", name: "es_hostelbuldid" })
  esHostelbuldid: number;

  @Column("varchar", { name: "buld_name", length: 255 })
  buldName: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";

  @Column("date", { name: "createdon" })
  createdon: string;
}
