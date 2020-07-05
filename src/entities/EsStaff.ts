import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude, classToPlain } from "class-transformer";

@Entity("es_staff", { schema: "school" })
export class EsStaff {
  @PrimaryGeneratedColumn({ type: "int", name: "es_staffid" })
  esStaffid: number;

  @Column("varchar", { name: "st_postaplied", length: 255 })
  stPostaplied: string;

  @Column("varchar", { name: "st_firstname", length: 255 })
  stFirstname: string;

  @Column("varchar", { name: "st_lastname", length: 255 })
  stLastname: string;

  @Column("varchar", { name: "st_gender", length: 255 })
  stGender: string;

  @Column("varchar", { name: "st_fthname", length: 255 })
  stFthname: string;

  @Column("varchar", { name: "st_dob", length: 255 })
  stDob: string;

  @Column("varchar", { name: "st_primarysubject", length: 255 })
  stPrimarysubject: string;

  @Column("varchar", { name: "st_fatherhusname", length: 255 })
  stFatherhusname: string;

  @Column("int", { name: "st_noofdughters" })
  stNoofdughters: number;

  @Column("varchar", { name: "st_noofsons", length: 255 })
  stNoofsons: string;

  @Column("varchar", { name: "st_faminfo", length: 255 })
  stFaminfo: string;

  @Column("varchar", { name: "st_hobbies", length: 255 })
  stHobbies: string;

  @Column("varchar", { name: "st_marital", length: 255 })
  stMarital: string;

  @Column("varchar", { name: "st_experience", length: 255 })
  stExperience: string;

  @Column("varchar", { name: "st_attach1", length: 255 })
  stAttach1: string;

  @Column("varchar", { name: "st_attach2", length: 255 })
  stAttach2: string;

  @Column("varchar", { name: "st_attach3", length: 255 })
  stAttach3: string;

  @Column("varchar", { name: "st_attach4", length: 255 })
  stAttach4: string;

  @Column("varchar", { name: "st_category", length: 255 })
  stCategory: string;

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
    enum: ["selected", "notselected", "onhold", "added", "dismisied"],
  })
  status: "selected" | "notselected" | "onhold" | "added" | "dismisied";

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

  @Column("date", { name: "intdate" })
  intdate: string;

  @Column("varchar", { name: "image", length: 255 })
  image: string;

  @Column("enum", {
    name: "selstatus",
    enum: ["issued", "notissued", "accepted", "notaccepted"],
  })
  selstatus: "issued" | "notissued" | "accepted" | "notaccepted";

  @Column("enum", {
    name: "tcstatus",
    enum: ["notissued", "issued", "resigned"],
  })
  tcstatus: "notissued" | "issued" | "resigned";

  @Column("varchar", { name: "st_username", length: 255 })
  stUsername: string;

  @Exclude()
  @Column("varchar", { name: "st_password", length: 255 })
  stPassword: string;

  @Column("varchar", { name: "st_theme", length: 255 })
  stTheme: string;

  @Column("varchar", { name: "st_class", length: 255 })
  stClass: string;

  @Column("varchar", { name: "st_subject", length: 255 })
  stSubject: string;

  @Column("varchar", { name: "st_qualification", length: 255 })
  stQualification: string;

  @Column("varchar", { name: "st_marks1", length: 255 })
  stMarks1: string;

  @Column("varchar", { name: "st_marks2", length: 255 })
  stMarks2: string;

  @Column("varchar", { name: "st_marks3", length: 255 })
  stMarks3: string;

  @Column("varchar", { name: "st_permissions", length: 255 })
  stPermissions: string;

  @Column("varchar", { name: "st_bloodgroup", length: 255 })
  stBloodgroup: string;

  @Column("enum", {
    name: "teach_nonteach",
    enum: ["teaching", "nonteaching"],
    default: () => "'teaching'",
  })
  teachNonteach: "teaching" | "nonteaching";

  @Column("varchar", { name: "st_emailsend", length: 255 })
  stEmailsend: string;

  @Column("varchar", { name: "terminationdate", length: 255 })
  terminationdate: string;

  @Column("varchar", { name: "hrdsid", length: 255 })
  hrdsid: string;

  @Column("varchar", { name: "st_mail", length: 222 })
  stMail: string;

  @Column("varchar", { name: "mamber1", length: 255 })
  mamber1: string;

  @Column("varchar", { name: "mamber2", length: 255 })
  mamber2: string;

  @Column("varchar", { name: "mamber3", length: 255 })
  mamber3: string;

  @Column("varchar", { name: "mamber4", length: 255 })
  mamber4: string;

  @Column("varchar", { name: "mamber5", length: 255 })
  mamber5: string;

  @Column("int", { name: "age1" })
  age1: number;

  @Column("int", { name: "age2" })
  age2: number;

  @Column("int", { name: "age3" })
  age3: number;

  @Column("int", { name: "age4" })
  age4: number;

  @Column("int", { name: "age5" })
  age5: number;

  @Column("varchar", { name: "relation1", length: 255 })
  relation1: string;

  @Column("varchar", { name: "relation2", length: 255 })
  relation2: string;

  @Column("varchar", { name: "relation3", length: 255 })
  relation3: string;

  @Column("varchar", { name: "relation4", length: 255 })
  relation4: string;

  @Column("varchar", { name: "relation5", length: 255 })
  relation5: string;

  @Column("varchar", { name: "education1", length: 255 })
  education1: string;

  @Column("varchar", { name: "education2", length: 255 })
  education2: string;

  @Column("varchar", { name: "education3", length: 255 })
  education3: string;

  @Column("varchar", { name: "education4", length: 255 })
  education4: string;

  @Column("varchar", { name: "education5", length: 255 })
  education5: string;

  @Column("varchar", { name: "occupation1", length: 255 })
  occupation1: string;

  @Column("varchar", { name: "occupation2", length: 255 })
  occupation2: string;

  @Column("varchar", { name: "occupation3", length: 255 })
  occupation3: string;

  @Column("varchar", { name: "occupation4", length: 255 })
  occupation4: string;

  @Column("varchar", { name: "occupation5", length: 255 })
  occupation5: string;

  @Exclude()
  getName():string{
    return `${this.stFirstname} ${this.stLastname}`
  }

  toJSON(){
    return classToPlain(this)
  }
}
