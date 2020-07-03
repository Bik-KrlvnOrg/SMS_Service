import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_trans_board_allocation_to_student", { schema: "school" })
export class EsTransBoardAllocationToStudent {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "board_id" })
  boardId: number;

  @Column("int", { name: "student_staff_id" })
  studentStaffId: number;

  @Column("varchar", { name: "type", length: 255 })
  type: string;

  @Column("enum", { name: "status", enum: ["Active", "Inactive", "Delete"] })
  status: "Active" | "Inactive" | "Delete";

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("date", { name: "deallocated" })
  deallocated: string;
}
