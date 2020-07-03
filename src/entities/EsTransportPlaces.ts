import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_transport_places", { schema: "school" })
export class EsTransportPlaces {
  @PrimaryGeneratedColumn({ type: "int", name: "tr_place_id" })
  trPlaceId: number;

  @Column("varchar", { name: "place_name", length: 255 })
  placeName: string;

  @Column("date", { name: "created_on" })
  createdOn: string;
}
