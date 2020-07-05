import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_timetable_subject", { schema: "school" })
export class EsTimetableSubject {
  @PrimaryGeneratedColumn({ type: "int", name: "es_sub_id" })
  esSubId: number;

  @Column("varchar", { name: "es_class", length: 255 })
  esClass: string;

  @Column("varchar", { name: "es_m1", length: 255 })
  esM1: string;

  @Column("varchar", { name: "es_m2", length: 255 })
  esM2: string;

  @Column("varchar", { name: "es_m3", length: 255 })
  esM3: string;

  @Column("varchar", { name: "es_m4", length: 255 })
  esM4: string;

  @Column("varchar", { name: "es_m5", length: 255 })
  esM5: string;

  @Column("varchar", { name: "es_m6", length: 255 })
  esM6: string;

  @Column("varchar", { name: "es_m7", length: 255 })
  esM7: string;

  @Column("varchar", { name: "es_m8", length: 255 })
  esM8: string;

  @Column("varchar", { name: "es_m9", length: 255 })
  esM9: string;

  @Column("varchar", { name: "es_subject", length: 255 })
  esSubject: string;

  @Column("varchar", { name: "es_staffid", length: 255 })
  esStaffid: string;

  @Column("varchar", { name: "es_t1", length: 255 })
  esT1: string;

  @Column("varchar", { name: "es_t2", length: 255 })
  esT2: string;

  @Column("varchar", { name: "es_t3", length: 255 })
  esT3: string;

  @Column("varchar", { name: "es_t4", length: 255 })
  esT4: string;

  @Column("varchar", { name: "es_t5", length: 255 })
  esT5: string;

  @Column("varchar", { name: "es_t6", length: 255 })
  esT6: string;

  @Column("varchar", { name: "es_t7", length: 255 })
  esT7: string;

  @Column("varchar", { name: "es_t8", length: 255 })
  esT8: string;

  @Column("varchar", { name: "es_t9", length: 255 })
  esT9: string;

  @Column("varchar", { name: "es_w1", length: 255 })
  esW1: string;

  @Column("varchar", { name: "es_w2", length: 255 })
  esW2: string;

  @Column("varchar", { name: "es_w3", length: 255 })
  esW3: string;

  @Column("varchar", { name: "es_w4", length: 255 })
  esW4: string;

  @Column("varchar", { name: "es_w5", length: 255 })
  esW5: string;

  @Column("varchar", { name: "es_w6", length: 255 })
  esW6: string;

  @Column("varchar", { name: "es_w7", length: 255 })
  esW7: string;

  @Column("varchar", { name: "es_w8", length: 255 })
  esW8: string;

  @Column("varchar", { name: "es_w9", length: 255 })
  esW9: string;

  @Column("varchar", { name: "es_th1", length: 255 })
  esTh1: string;

  @Column("varchar", { name: "es_th2", length: 255 })
  esTh2: string;

  @Column("varchar", { name: "es_th3", length: 255 })
  esTh3: string;

  @Column("varchar", { name: "es_th4", length: 255 })
  esTh4: string;

  @Column("varchar", { name: "es_th5", length: 255 })
  esTh5: string;

  @Column("varchar", { name: "es_th6", length: 255 })
  esTh6: string;

  @Column("varchar", { name: "es_th7", length: 255 })
  esTh7: string;

  @Column("varchar", { name: "es_th8", length: 255 })
  esTh8: string;

  @Column("varchar", { name: "es_th9", length: 255 })
  esTh9: string;

  @Column("varchar", { name: "es_f1", length: 255 })
  esF1: string;

  @Column("varchar", { name: "es_f2", length: 255 })
  esF2: string;

  @Column("varchar", { name: "es_f3", length: 255 })
  esF3: string;

  @Column("varchar", { name: "es_f4", length: 255 })
  esF4: string;

  @Column("varchar", { name: "es_f5", length: 255 })
  esF5: string;

  @Column("varchar", { name: "es_f6", length: 255 })
  esF6: string;

  @Column("varchar", { name: "es_f7", length: 255 })
  esF7: string;

  @Column("varchar", { name: "es_f8", length: 255 })
  esF8: string;

  @Column("varchar", { name: "es_f9", length: 255 })
  esF9: string;

  @Column("varchar", { name: "es_s1", length: 255 })
  esS1: string;

  @Column("varchar", { name: "es_s2", length: 255 })
  esS2: string;

  @Column("varchar", { name: "es_s3", length: 255 })
  esS3: string;

  @Column("varchar", { name: "es_s4", length: 255 })
  esS4: string;

  @Column("varchar", { name: "es_s5", length: 255 })
  esS5: string;

  @Column("varchar", { name: "es_s6", length: 255 })
  esS6: string;

  @Column("varchar", { name: "es_s7", length: 255 })
  esS7: string;

  @Column("varchar", { name: "es_s8", length: 255 })
  esS8: string;

  @Column("varchar", { name: "es_s9", length: 255 })
  esS9: string;

  @Column("time", {
    name: "es_startfrom",
    nullable: true,
    default: () => "'09:00:00'",
  })
  esStartfrom: string | null;

  @Column("int", { name: "es_endto", nullable: true, default: () => "'9'" })
  esEndto: number | null;

  @Column("int", {
    name: "es_breakfrom",
    nullable: true,
    default: () => "'20'",
  })
  esBreakfrom: number | null;

  @Column("int", { name: "es_breakto", nullable: true, default: () => "'1'" })
  esBreakto: number | null;

  @Column("int", {
    name: "es_lunchfrom",
    nullable: true,
    default: () => "'20'",
  })
  esLunchfrom: number | null;

  @Column("int", { name: "es_lunchto", nullable: true, default: () => "'2'" })
  esLunchto: number | null;

  @Column("int", { name: "es_duration", default: () => "'45'" })
  esDuration: number;
}
