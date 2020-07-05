import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_preadmission1", { schema: "school" })
export class EsPreadmission1 {
  @PrimaryGeneratedColumn({ type: "int", name: "es_preadmissionid" })
  esPreadmissionid: number;

  @Column("varchar", { name: "pre_serialno", length: 255 })
  preSerialno: string;

  @Column("varchar", { name: "pre_number", length: 60 })
  preNumber: string;

  @Column("varchar", { name: "pre_student_username", length: 255 })
  preStudentUsername: string;

  @Column("varchar", { name: "pre_student_password", length: 255 })
  preStudentPassword: string;

  @Column("date", { name: "pre_dateofbirth" })
  preDateofbirth: string;

  @Column("varchar", { name: "pre_fathername", length: 255 })
  preFathername: string;

  @Column("varchar", { name: "middle_name", length: 255 })
  middleName: string;

  @Column("varchar", { name: "pre_mothername", length: 255 })
  preMothername: string;

  @Column("varchar", { name: "pre_fathersoccupation", length: 255 })
  preFathersoccupation: string;

  @Column("varchar", { name: "pre_fathersoccupation2", length: 225 })
  preFathersoccupation2: string;

  @Column("varchar", { name: "pre_motheroccupation", length: 255 })
  preMotheroccupation: string;

  @Column("varchar", { name: "pre_motheroccupation2", length: 255 })
  preMotheroccupation2: string;

  @Column("varchar", { name: "pre_contactname1", length: 255 })
  preContactname1: string;

  @Column("varchar", { name: "pre_contactno1", length: 255 })
  preContactno1: string;

  @Column("varchar", { name: "pre_contactno2", length: 255 })
  preContactno2: string;

  @Column("varchar", { name: "pre_contactname2", length: 255 })
  preContactname2: string;

  @Column("varchar", { name: "pre_address1", length: 255 })
  preAddress1: string;

  @Column("varchar", { name: "pre_city1", length: 255 })
  preCity1: string;

  @Column("varchar", { name: "pre_state1", length: 255 })
  preState1: string;

  @Column("varchar", { name: "pre_country1", length: 255 })
  preCountry1: string;

  @Column("varchar", { name: "pre_phno1", length: 255 })
  prePhno1: string;

  @Column("varchar", { name: "pre_mobile1", length: 255 })
  preMobile1: string;

  @Column("varchar", { name: "pre_prev_acadamicname", length: 255 })
  prePrevAcadamicname: string;

  @Column("varchar", { name: "pre_prev_class", length: 255 })
  prePrevClass: string;

  @Column("varchar", { name: "pre_prev_university", length: 255 })
  prePrevUniversity: string;

  @Column("varchar", { name: "pre_prev_percentage", length: 255 })
  prePrevPercentage: string;

  @Column("varchar", { name: "pre_prev_tcno", length: 255 })
  prePrevTcno: string;

  @Column("varchar", { name: "pre_current_acadamicname", length: 255 })
  preCurrentAcadamicname: string;

  @Column("varchar", { name: "pre_current_class1", length: 255 })
  preCurrentClass1: string;

  @Column("varchar", { name: "pre_current_percentage1", length: 255 })
  preCurrentPercentage1: string;

  @Column("varchar", { name: "pre_current_result1", length: 255 })
  preCurrentResult1: string;

  @Column("varchar", { name: "pre_current_class2", length: 255 })
  preCurrentClass2: string;

  @Column("varchar", { name: "pre_current_percentage2", length: 255 })
  preCurrentPercentage2: string;

  @Column("varchar", { name: "pre_current_result2", length: 255 })
  preCurrentResult2: string;

  @Column("varchar", { name: "pre_current_class3", length: 255 })
  preCurrentClass3: string;

  @Column("varchar", { name: "pre_current_percentage3", length: 255 })
  preCurrentPercentage3: string;

  @Column("varchar", { name: "pre_current_result3", length: 255 })
  preCurrentResult3: string;

  @Column("varchar", { name: "pre_physical_details", length: 255 })
  prePhysicalDetails: string;

  @Column("varchar", { name: "pre_height", length: 255 })
  preHeight: string;

  @Column("varchar", { name: "pre_weight", length: 255 })
  preWeight: string;

  @Column("varchar", { name: "pre_alerge", length: 255 })
  preAlerge: string;

  @Column("varchar", { name: "pre_physical_status", length: 255 })
  prePhysicalStatus: string;

  @Column("varchar", { name: "pre_special_care", length: 255 })
  preSpecialCare: string;

  @Column("varchar", { name: "pre_class", length: 255 })
  preClass: string;

  @Column("varchar", { name: "pre_sec", length: 255 })
  preSec: string;

  @Column("varchar", { name: "pre_name", length: 255 })
  preName: string;

  @Column("int", { name: "pre_age" })
  preAge: number;

  @Column("varchar", { name: "pre_address", length: 255 })
  preAddress: string;

  @Column("varchar", { name: "pre_city", length: 255 })
  preCity: string;

  @Column("varchar", { name: "pre_state", length: 255 })
  preState: string;

  @Column("varchar", { name: "pre_country", length: 255 })
  preCountry: string;

  @Column("varchar", { name: "pre_phno", length: 255 })
  prePhno: string;

  @Column("varchar", { name: "pre_mobile", length: 255 })
  preMobile: string;

  @Column("varchar", { name: "pre_resno", length: 255 })
  preResno: string;

  @Column("varchar", { name: "pre_resno1", length: 255 })
  preResno1: string;

  @Column("varchar", { name: "pre_image", length: 255 })
  preImage: string;

  @Column("varchar", { name: "test1", length: 255 })
  test1: string;

  @Column("varchar", { name: "test2", length: 255 })
  test2: string;

  @Column("varchar", { name: "test3", length: 255 })
  test3: string;

  @Column("varchar", { name: "pre_pincode1", length: 255 })
  prePincode1: string;

  @Column("varchar", { name: "pre_pincode", length: 255 })
  prePincode: string;

  @Column("varchar", { name: "pre_emailid", length: 255 })
  preEmailid: string;

  @Column("varchar", { name: "pre_emailid2", length: 100 })
  preEmailid2: string;

  @Column("date", { name: "pre_fromdate" })
  preFromdate: string;

  @Column("date", { name: "pre_todate" })
  preTodate: string;

  @Column("enum", {
    name: "status",
    enum: ["pass", "fail", "resultawaiting", "inactive"],
  })
  status: "pass" | "fail" | "resultawaiting" | "inactive";

  @Column("enum", {
    name: "pre_status",
    enum: ["inactive", "active"],
    default: () => "'active'",
  })
  preStatus: "inactive" | "active";

  @Column("varchar", { name: "es_user_theme", length: 255 })
  esUserTheme: string;

  @Column("varchar", { name: "pre_hobbies", length: 255 })
  preHobbies: string;

  @Column("varchar", { name: "pre_blood_group", length: 255 })
  preBloodGroup: string;

  @Column("enum", { name: "pre_gender", enum: ["male", "female"] })
  preGender: "male" | "female";

  @Column("varchar", { name: "admission_status", length: 255 })
  admissionStatus: string;

  @Column("int", { name: "caste_id" })
  casteId: number;

  @Column("int", { name: "tr_place_id" })
  trPlaceId: number;

  @Column("varchar", { name: "ann_income", length: 255 })
  annIncome: string;

  @Column("date", { name: "admission_date" })
  admissionDate: string;

  @Column("date", { name: "admission_date1" })
  admissionDate1: string;

  @Column("enum", {
    name: "document_deposited",
    enum: ["YES", "NO"],
    default: () => "'YES'",
  })
  documentDeposited: "YES" | "NO";

  @Column("varchar", { name: "fee_concession", length: 255 })
  feeConcession: string;

  @Column("date", { name: "pre_dateofbirth1" })
  preDateofbirth1: string;

  @Column("date", { name: "pre_dateofbirth2" })
  preDateofbirth2: string;

  @Column("date", { name: "pre_dateofbirth3" })
  preDateofbirth3: string;

  @Column("varchar", { name: "es_home", length: 255 })
  esHome: string;

  @Column("varchar", { name: "es_econbackward", length: 255 })
  esEconbackward: string;

  @Column("varchar", { name: "admission_id", length: 100 })
  admissionId: string;

  @Column("int", { name: "school_id" })
  schoolId: number;

  @Column("varchar", { name: "pre_lastname", length: 230 })
  preLastname: string;

  @Column("varchar", { name: "pre_placeofbirth", length: 230 })
  prePlaceofbirth: string;

  @Column("varchar", { name: "pre_contactno", length: 230 })
  preContactno: string;

  @Column("varchar", { name: "pre_contactno3", length: 230 })
  preContactno3: string;

  @Column("varchar", { name: "pre_resno2", length: 230 })
  preResno2: string;
}
