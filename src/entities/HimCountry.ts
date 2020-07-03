import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_country_name", ["countryName"], {})
@Entity("him_country", { schema: "school" })
export class HimCountry {
  @PrimaryGeneratedColumn({ type: "int", name: "country_id" })
  countryId: number;

  @Column("int", { name: "zone_id", default: () => "'1'" })
  zoneId: number;

  @Column("varchar", { name: "country_name", nullable: true, length: 64 })
  countryName: string | null;

  @Column("char", { name: "country_3_code", nullable: true, length: 3 })
  country_3Code: string | null;

  @Column("char", { name: "country_2_code", nullable: true, length: 2 })
  country_2Code: string | null;

  @Column("varchar", { name: "country_flag", length: 255 })
  countryFlag: string;
}
