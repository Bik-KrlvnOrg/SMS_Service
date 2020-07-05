import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mlc_yourcomment", { schema: "school" })
export class MlcYourcomment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "firstname", length: 255 })
  firstname: string;

  @Column("varchar", { name: "lastname", length: 255 })
  lastname: string;

  @Column("varchar", { name: "company_name", length: 255 })
  companyName: string;

  @Column("varchar", { name: "address", length: 255 })
  address: string;

  @Column("varchar", { name: "city", length: 255 })
  city: string;

  @Column("varchar", { name: "postal_code", length: 255 })
  postalCode: string;

  @Column("varchar", { name: "country", length: 255 })
  country: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("varchar", { name: "fax", length: 255 })
  fax: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "comments", length: 255 })
  comments: string;

  @Column("enum", {
    name: "status",
    enum: ["active", "inactive", "deleted"],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "deleted";

  @Column("date", { name: "created_on" })
  createdOn: string;
}
