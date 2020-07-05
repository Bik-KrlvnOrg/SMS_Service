import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_candidate", { schema: "school" })
export class EsCandidate {
  @PrimaryGeneratedColumn({ type: "int", name: "es_candidateid" })
  esCandidateid: number;

  @Column("varchar", { name: "st_postaplied", length: 255 })
  stPostaplied: string;

  @Column("varchar", { name: "st_firstname", length: 255 })
  stFirstname: string;

  @Column("varchar", { name: "st_lastname", length: 255 })
  stLastname: string;

  @Column("varchar", { name: "st_gender", length: 255 })
  stGender: string;

  @Column("varchar", { name: "st_dob", length: 255 })
  stDob: string;

  @Column("varchar", { name: "st_primarysubject", length: 255 })
  stPrimarysubject: string;

  @Column("varchar", { name: "st_fatherhusname", length: 255 })
  stFatherhusname: string;

  @Column("int", { name: "st_noofdughters" })
  stNoofdughters: number;

  @Column("int", { name: "st_noofsons" })
  stNoofsons: number;

  @Column("varchar", { name: "st_email", length: 255 })
  stEmail: string;

  @Column("varchar", { name: "st_mobilenocomunication", length: 255 })
  stMobilenocomunication: string;

  @Column("varchar", { name: "st_examp1", length: 255 })
  stExamp1: string;

  @Column("varchar", { name: "st_examp2", length: 255 })
  stExamp2: string;

  @Column("varchar", { name: "st_examp3", length: 255 })
  stExamp3: string;

  @Column("varchar", { name: "st_marks1", length: 255 })
  stMarks1: string;

  @Column("varchar", { name: "st_marks2", length: 255 })
  stMarks2: string;

  @Column("varchar", { name: "st_marks3", length: 255 })
  stMarks3: string;

  @Column("varchar", { name: "st_borduniversity1", length: 255 })
  stBorduniversity1: string;

  @Column("varchar", { name: "st_borduniversity2", length: 255 })
  stBorduniversity2: string;

  @Column("varchar", { name: "st_borduniversity3", length: 255 })
  stBorduniversity3: string;

  @Column("varchar", { name: "st_year1", length: 255 })
  stYear1: string;

  @Column("varchar", { name: "st_year2", length: 255 })
  stYear2: string;

  @Column("varchar", { name: "st_year3", length: 255 })
  stYear3: string;

  @Column("varchar", { name: "st_insititute1", length: 255 })
  stInsititute1: string;

  @Column("varchar", { name: "st_insititute2", length: 255 })
  stInsititute2: string;

  @Column("varchar", { name: "st_insititute3", length: 255 })
  stInsititute3: string;

  @Column("varchar", { name: "st_position1", length: 255 })
  stPosition1: string;

  @Column("varchar", { name: "st_position2", length: 255 })
  stPosition2: string;

  @Column("varchar", { name: "st_position3", length: 255 })
  stPosition3: string;

  @Column("varchar", { name: "st_period1", length: 255 })
  stPeriod1: string;

  @Column("varchar", { name: "st_period2", length: 255 })
  stPeriod2: string;

  @Column("varchar", { name: "st_period3", length: 255 })
  stPeriod3: string;

  @Column("varchar", { name: "st_pradress", length: 255 })
  stPradress: string;

  @Column("varchar", { name: "st_prcity", length: 255 })
  stPrcity: string;

  @Column("varchar", { name: "st_prpincode", length: 255 })
  stPrpincode: string;

  @Column("varchar", { name: "st_prphonecode", length: 255 })
  stPrphonecode: string;

  @Column("varchar", { name: "st_prstate", length: 255 })
  stPrstate: string;

  @Column("varchar", { name: "st_prresino", length: 255 })
  stPrresino: string;

  @Column("varchar", { name: "st_prcountry", length: 255 })
  stPrcountry: string;

  @Column("varchar", { name: "st_prmobno", length: 255 })
  stPrmobno: string;

  @Column("varchar", { name: "st_peadress", length: 255 })
  stPeadress: string;

  @Column("varchar", { name: "st_pecity", length: 255 })
  stPecity: string;

  @Column("varchar", { name: "st_pepincode", length: 255 })
  stPepincode: string;

  @Column("varchar", { name: "st_pephoneno", length: 255 })
  stPephoneno: string;

  @Column("varchar", { name: "st_pestate", length: 255 })
  stPestate: string;

  @Column("varchar", { name: "st_peresino", length: 255 })
  stPeresino: string;

  @Column("varchar", { name: "st_pecountry", length: 255 })
  stPecountry: string;

  @Column("varchar", { name: "st_pemobileno", length: 255 })
  stPemobileno: string;

  @Column("varchar", { name: "st_refposname1", length: 255 })
  stRefposname1: string;

  @Column("varchar", { name: "st_refposname2", length: 255 })
  stRefposname2: string;

  @Column("varchar", { name: "st_refposname3", length: 255 })
  stRefposname3: string;

  @Column("varchar", { name: "st_refdesignation1", length: 255 })
  stRefdesignation1: string;

  @Column("varchar", { name: "st_refdesignation2", length: 255 })
  stRefdesignation2: string;

  @Column("varchar", { name: "st_refdesignation3", length: 255 })
  stRefdesignation3: string;

  @Column("varchar", { name: "st_refinsititute1", length: 255 })
  stRefinsititute1: string;

  @Column("varchar", { name: "st_refinsititute2", length: 255 })
  stRefinsititute2: string;

  @Column("varchar", { name: "st_refinsititute3", length: 255 })
  stRefinsititute3: string;

  @Column("varchar", { name: "st_refemail1", length: 255 })
  stRefemail1: string;

  @Column("varchar", { name: "st_refemail2", length: 255 })
  stRefemail2: string;

  @Column("varchar", { name: "st_refemail3", length: 255 })
  stRefemail3: string;

  @Column("varchar", { name: "st_writentest", length: 255 })
  stWritentest: string;

  @Column("varchar", { name: "st_technicalinterview", length: 255 })
  stTechnicalinterview: string;

  @Column("varchar", { name: "st_finalinterview", length: 255 })
  stFinalinterview: string;

  @Column("enum", {
    name: "status",
    enum: ["selected", "notselected", "onhold"],
  })
  status: "selected" | "notselected" | "onhold";

  @Column("varchar", { name: "st_perviouspackage", length: 255 })
  stPerviouspackage: string;

  @Column("varchar", { name: "st_basic", length: 255 })
  stBasic: string;

  @Column("varchar", { name: "st_dateofjoining", length: 255 })
  stDateofjoining: string;

  @Column("varchar", { name: "st_post", length: 255 })
  stPost: string;

  @Column("varchar", { name: "st_department", length: 255 })
  stDepartment: string;

  @Column("varchar", { name: "st_remarks", length: 255 })
  stRemarks: string;

  @Column("varchar", { name: "st_qualification", length: 255 })
  stQualification: string;

  @Column("varchar", { name: "st_class", length: 255 })
  stClass: string;

  @Column("int", { name: "es_staffid" })
  esStaffid: number;

  @Column("enum", { name: "staff_status", enum: ["addedtostaff", "notadded"] })
  staffStatus: "addedtostaff" | "notadded";

  @Column("varchar", { name: "st_emailsend", length: 255 })
  stEmailsend: string;
}
