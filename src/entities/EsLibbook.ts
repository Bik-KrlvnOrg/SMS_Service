import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_libbook", { schema: "school" })
export class EsLibbook {
  @PrimaryGeneratedColumn({ type: "int", name: "es_libbookid" })
  esLibbookid: number;

  @Column("date", { name: "lbook_dateofpurchase" })
  lbookDateofpurchase: string;

  @Column("int", { name: "lbook_aceesnofrom" })
  lbookAceesnofrom: number;

  @Column("int", { name: "lbook_accessnoto" })
  lbookAccessnoto: number;

  @Column("int", { name: "lbook_bookfromno" })
  lbookBookfromno: number;

  @Column("int", { name: "lbook_booktono" })
  lbookBooktono: number;

  @Column("varchar", { name: "lbook_author", length: 255 })
  lbookAuthor: string;

  @Column("varchar", { name: "lbook_title", length: 255 })
  lbookTitle: string;

  @Column("varchar", { name: "lbook_publishername", length: 255 })
  lbookPublishername: string;

  @Column("varchar", { name: "lbook_publisherplace", length: 255 })
  lbookPublisherplace: string;

  @Column("varchar", { name: "lbook_booksubject", length: 255 })
  lbookBooksubject: string;

  @Column("varchar", { name: "lbook_bookedition", length: 255 })
  lbookBookedition: string;

  @Column("varchar", { name: "lbook_year", length: 255 })
  lbookYear: string;

  @Column("varchar", { name: "lbook_cost", length: 255 })
  lbookCost: string;

  @Column("varchar", { name: "lbook_sourse", length: 255 })
  lbookSourse: string;

  @Column("varchar", { name: "lbook_aditinalbookinfo", length: 255 })
  lbookAditinalbookinfo: string;

  @Column("varchar", { name: "lbook_bookstatus", length: 255 })
  lbookBookstatus: string;

  @Column("varchar", { name: "lbook_category", length: 255 })
  lbookCategory: string;

  @Column("varchar", { name: "lbook_class", length: 255 })
  lbookClass: string;

  @Column("varchar", { name: "lbook_booksubcategory", length: 255 })
  lbookBooksubcategory: string;

  @Column("varchar", { name: "lbook_ref", length: 255 })
  lbookRef: string;

  @Column("varchar", { name: "lbook_statusstatus", length: 255 })
  lbookStatusstatus: string;

  @Column("varchar", { name: "lbook_pages", length: 255 })
  lbookPages: string;

  @Column("varchar", { name: "lbook_volume", length: 255 })
  lbookVolume: string;

  @Column("varchar", { name: "lbook_bilnumber", length: 255 })
  lbookBilnumber: string;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";

  @Column("enum", { name: "issuestatus", enum: ["issued", "notissued"] })
  issuestatus: "issued" | "notissued";
}
