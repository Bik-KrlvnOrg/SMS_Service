import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_enquiry", { schema: "school" })
export class EsEnquiry {
  @PrimaryGeneratedColumn({ type: "int", name: "es_enquiryid" })
  esEnquiryid: number;

  @Column("int", { name: "eq_serialno" })
  eqSerialno: number;

  @Column("date", { name: "eq_createdon" })
  eqCreatedon: string;

  @Column("varchar", { name: "eq_name", length: 255 })
  eqName: string;

  @Column("varchar", { name: "eq_address", length: 255 })
  eqAddress: string;

  @Column("varchar", { name: "eq_city", length: 255 })
  eqCity: string;

  @Column("varchar", { name: "eq_wardname", length: 255 })
  eqWardname: string;

  @Column("varchar", { name: "eq_sex", length: 255 })
  eqSex: string;

  @Column("varchar", { name: "eq_class", length: 255 })
  eqClass: string;

  @Column("varchar", { name: "eq_phno", length: 255 })
  eqPhno: string;

  @Column("varchar", { name: "eq_mobile", length: 255 })
  eqMobile: string;

  @Column("varchar", { name: "eq_emailid", length: 255 })
  eqEmailid: string;

  @Column("varchar", { name: "eq_reftype", length: 255 })
  eqReftype: string;

  @Column("varchar", { name: "eq_refname", length: 255 })
  eqRefname: string;

  @Column("varchar", { name: "eq_description", length: 255 })
  eqDescription: string;

  @Column("varchar", { name: "eq_formtype", length: 255 })
  eqFormtype: string;

  @Column("varchar", { name: "eq_paymode", length: 255 })
  eqPaymode: string;

  @Column("varchar", { name: "eq_chequeno", length: 255 })
  eqChequeno: string;

  @Column("varchar", { name: "eq_bankname", length: 255 })
  eqBankname: string;

  @Column("date", { name: "eq_submitedon" })
  eqSubmitedon: string;

  @Column("varchar", { name: "eq_acadamic", length: 255 })
  eqAcadamic: string;

  @Column("int", { name: "eq_marksobtain" })
  eqMarksobtain: number;

  @Column("int", { name: "eq_outof" })
  eqOutof: number;

  @Column("varchar", { name: "eq_oralexam", length: 255 })
  eqOralexam: string;

  @Column("varchar", { name: "eq_familyinteraction", length: 255 })
  eqFamilyinteraction: string;

  @Column("double", { name: "eq_percentage", precision: 22 })
  eqPercentage: number;

  @Column("varchar", { name: "eq_result", length: 255 })
  eqResult: string;

  @Column("varchar", { name: "eq_amountpaid", length: 255 })
  eqAmountpaid: string;

  @Column("varchar", { name: "eq_state", length: 255 })
  eqState: string;

  @Column("int", { name: "es_preadmissionid" })
  esPreadmissionid: number;

  @Column("varchar", { name: "eq_mothername", length: 255 })
  eqMothername: string;

  @Column("varchar", { name: "eq_zip", length: 255 })
  eqZip: string;

  @Column("int", { name: "college_id" })
  collegeId: number;

  @Column("text", { name: "eq_prv_acdmic" })
  eqPrvAcdmic: string;

  @Column("varchar", { name: "eq_countryid", length: 255 })
  eqCountryid: string;

  @Column("date", { name: "eq_dob" })
  eqDob: string;

  @Column("varchar", { name: "eq_application_no", length: 255 })
  eqApplicationNo: string;

  @Column("int", { name: "es_voucherentryid" })
  esVoucherentryid: number;

  @Column("varchar", { name: "pre_class", length: 255 })
  preClass: string;

  @Column("varchar", { name: "scat_id", length: 255 })
  scatId: string;
}
