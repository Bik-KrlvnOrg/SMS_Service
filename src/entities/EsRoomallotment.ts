import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_roomallotment", { schema: "school" })
export class EsRoomallotment {
  @PrimaryGeneratedColumn({ type: "int", name: "es_roomallotmentid" })
  esRoomallotmentid: number;

  @Column("int", { name: "es_hostelroomid" })
  esHostelroomid: number;

  @Column("int", { name: "es_personid" })
  esPersonid: number;

  @Column("varchar", { name: "es_persontype", length: 255 })
  esPersontype: string;

  @Column("date", { name: "alloted_date" })
  allotedDate: string;

  @Column("date", { name: "dealloted_date" })
  deallotedDate: string;

  @Column("enum", { name: "status", enum: ["allocated", "deallocated"] })
  status: "allocated" | "deallocated";
}
