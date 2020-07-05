import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_in_goods_issue", { schema: "school" })
export class EsInGoodsIssue {
  @PrimaryGeneratedColumn({ type: "int", name: "es_in_goods_issueid" })
  esInGoodsIssueid: number;

  @Column("datetime", { name: "in_issue_date" })
  inIssueDate: Date;

  @Column("varchar", { name: "in_issue_to", length: 255 })
  inIssueTo: string;

  @Column("int", { name: "in_inventory_id" })
  inInventoryId: number;

  @Column("longtext", { name: "in_issued_items" })
  inIssuedItems: string;

  @Column("longtext", { name: "in_returned_items" })
  inReturnedItems: string;

  @Column("int", { name: "in_department_id" })
  inDepartmentId: number;

  @Column("enum", {
    name: "in_issue_status",
    enum: ["notreturned", "partialreturned", "returned"],
  })
  inIssueStatus: "notreturned" | "partialreturned" | "returned";

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";
}
