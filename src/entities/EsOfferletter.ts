import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_offerletter", { schema: "school" })
export class EsOfferletter {
  @PrimaryGeneratedColumn({ type: "int", name: "es_offerletterid" })
  esOfferletterid: number;

  @Column("longtext", { name: "ofr_message" })
  ofrMessage: string;
}
