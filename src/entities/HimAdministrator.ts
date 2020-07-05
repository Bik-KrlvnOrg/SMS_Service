import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("him_administrator", { schema: "school" })
export class HimAdministrator {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "firstname", length: 255 })
  firstname: string;

  @Column("varchar", { name: "lastname", length: 255 })
  lastname: string;

  @Column("enum", { name: "type", enum: ["super", "admin"] })
  type: "super" | "admin";

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "address", length: 255 })
  address: string;

  @Column("enum", { name: "status", enum: ["active", "inactive", "deleted"] })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
