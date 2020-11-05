import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { } from 'class-validator';
import { Exclude, classToPlain } from 'class-transformer';
import { AcademicStatus, AccountStatus, Gender } from '../libs';

@Entity('es_preadmission', { schema: 'school' })
export class StudentEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'es_preadmissionid' })
  id: number;

  @Column('varchar', { name: 'pre_serialno', length: 255 })
  title: string = "";

  @Column('varchar', { name: 'pre_student_username', length: 255 })
  username: string;

  @Column('varchar', { name: 'pre_name', length: 255 })
  firstName: string;

  @Column('varchar', { name: 'pre_lastname', length: 230 })
  lastName: string;

  @Column('varchar', { name: 'middle_name', length: 255 })
  middleName: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_student_password', length: 255 })
  password: string;

  @Column('varchar', { name: 'pre_resno1', length: 255 })
  email: string;

  @Column('date', { name: 'pre_dateofbirth' })
  dob: Date;

  @Column('int', { name: 'pre_age' })
  age: number;

  @Column('enum', { name: 'pre_gender', enum: ['male', 'female'] })
  gender: Gender

  @Column('varchar', { name: 'pre_mobile1', length: 255 })
  smsNo: string;

  @Column('varchar', { name: 'pre_contactno1', length: 255 })
  contact: string;

  @Column('varchar', { name: 'pre_contactno2', length: 255 })
  contact_2: string = "";

  @Column('varchar', { name: 'pre_class', length: 255 })
  classId: number;

  @Column('varchar', { name: 'pre_image', length: 255 })
  avatarUrl: string = "";

  @Column('varchar', { name: 'pre_blood_group', length: 255 })
  bloodGroup: string = "";

  @Column('varchar', { name: 'pre_fathername', length: 255 })
  fatherName: string = "";

  @Column('varchar', { name: 'pre_mothername', length: 255 })
  motherName: string = "";


  @Column('varchar', { name: 'pre_address1', length: 255 })
  address: string;

  @Column('varchar', { name: 'pre_city1', length: 255 })
  city: string = "";

  @Column('varchar', { name: 'pre_state1', length: 255 })
  state: string = "";

  @Column('varchar', { name: 'pre_country1', length: 255 })
  country: string = "";


  @Column('enum', {
    name: 'status',
    enum: ['pass', 'fail', 'resultawaiting', 'inactive'],
  })
  resultStatus: AcademicStatus

  @Column('enum', {
    name: 'pre_status',
    enum: ['inactive', 'active'],
    default: () => "'active'",
  })
  status: AccountStatus

  @Column('varchar', { name: 'admission_id', length: 100 })
  admissionId: string;

  @Column('int', { name: 'school_id' })
  schoolId: number;

  @Column('varchar', { name: 'admission_status', length: 255 })
  admissionStatus: string = "";

  @Column('date', { name: 'pre_fromdate' })
  fromDate: Date;

  @Column('date', { name: 'pre_todate' })
  toDate: Date;

  @Column('date', { name: 'pre_dateofbirth1' })
  prevSchoolDate: Date = new Date();

  @Column('varchar', { name: 'es_econbackward4', length: 255 })
  admissionType: string;

  @Column('varchar', { name: 'pre_address', length: 255 })
  residentialAddress: string;

  @Column('varchar', { name: 'test2', length: 255 })
  religion: string = "";

  @Column('varchar', { name: 'test1', length: 255 })
  nationality: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_fathersoccupation2', length: 225 })
  fathersOccupation_2: string = "";
  @Column('varchar', { name: 'pre_motheroccupation2', length: 255 })
  motherOccupation_2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_contactname1', length: 255 })
  contactName_1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_contactname2', length: 255 })
  contactName_2: string = "";
 
  @Exclude()
  @Column('varchar', { name: 'aadharno', length: 100 })
  aadharno: string = "";

  @Exclude()
  @Column('varchar', { name: 'board', length: 100 })
  board: string = "";
  
  @Exclude()
  @Column('varchar', { name: 'edugap', length: 255 })
  edugap: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_phno1', length: 255 })
  prePhno1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_fathersoccupation', length: 255 })
  fatherOccupation: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_motheroccupation', length: 255 })
  motherOccupation: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_prev_acadamicname', length: 255 })
  prevAcadamicName: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_prev_class', length: 255 })
  prevClass: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_prev_university', length: 255 })
  prevUniversity: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_prev_percentage', length: 255 })
  prevPercentage: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_prev_tcno', length: 255 })
  prevTcno: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_acadamicname', length: 255 })
  preCurrentAcadamicname: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_class1', length: 255 })
  preCurrentClass1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_percentage1', length: 255 })
  preCurrentPercentage1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_result1', length: 255 })
  preCurrentResult1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_class2', length: 255 })
  preCurrentClass2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_percentage2', length: 255 })
  preCurrentPercentage2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_result2', length: 255 })
  preCurrentResult2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_class3', length: 255 })
  preCurrentClass3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_percentage3', length: 255 })
  preCurrentPercentage3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_current_result3', length: 255 })
  preCurrentResult3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_physical_details', length: 255 })
  prePhysicalDetails: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_height', length: 255 })
  preHeight: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_weight', length: 255 })
  preWeight: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_alerge', length: 255 })
  preAlerge: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_physical_status', length: 255 })
  prePhysicalStatus: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_special_care', length: 255 })
  preSpecialCare: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_sec', length: 255 })
  preSec: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_resno2', length: 230 })
  preResno2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_city', length: 255 })
  preCity: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_state', length: 255 })
  preState: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_country', length: 255 })
  preCountry: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_phno', length: 255 })
  prePhno: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_mobile', length: 255 })
  preMobile: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_resno', length: 255 })
  preResno: string = "";


  @Exclude()
  @Column('varchar', { name: 'test3', length: 255 })
  test3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_pincode1', length: 255 })
  prePincode1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_pincode', length: 255 })
  prePincode: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_emailid', length: 255 })
  preEmailid: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_emailid2', length: 100 })
  preEmailid2: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_user_theme', length: 255 })
  esUserTheme: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_hobbies', length: 255 })
  preHobbies: string = "";

  @Exclude()
  @Column('int', { name: 'caste_id' })
  casteId: number = -1;

  @Exclude()
  @Column('int', { name: 'tr_place_id' })
  trPlaceId: number = -1;

  @Exclude()
  @Column('varchar', { name: 'ann_income', length: 255 })
  annIncome: string = "";

  @Column('date', { name: 'admission_date' })
  admissionDate: Date;

  @Exclude()
  @Column('date', { name: 'admission_date1' })
  admissionDate1: Date = new Date();

  @Exclude()
  @Column('enum', {
    name: 'document_deposited',
    enum: ['YES', 'NO'],
    default: () => "'YES'",
  })
  documentDeposited: 'YES' | 'NO';

  @Column('varchar', { name: 'fee_concession', length: 255 })
  feeConcession: string = "";

  @Exclude()
  @Column('date', { name: 'pre_dateofbirth2' })
  preDateofbirth2: Date = new Date();

  @Exclude()
  @Column('date', { name: 'pre_dateofbirth3' })
  preDateofbirth3: Date = new Date();

  @Exclude()
  @Column('varchar', { name: 'es_home', length: 255 })
  esHome: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_econbackward', length: 255 })
  esEconbackward: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_econbackward1', length: 200 })
  esEconbackward1: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_econbackward2', length: 255 })
  esEconbackward2: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_econbackward3', length: 200 })
  esEconbackward3: string = "";

  @Exclude()
  @Column('varchar', { name: 'es_econbackward5', length: 255 })
  esEconbackward5: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_placeofbirth', length: 230 })
  prePlaceofbirth: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_contactno', length: 230 })
  preContactno: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_contactno3', length: 230 })
  preContactno3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family1', length: 111 })
  preFamily1: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family2', length: 100 })
  preFamily2: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family3', length: 100 })
  preFamily3: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family4', length: 100 })
  preFamily4: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family5', length: 111 })
  preFamily5: string = "";

  @Exclude()
  @Column('varchar', { name: 'age1', length: 111 })
  age1: string = "";

  @Exclude()
  @Column('varchar', { name: 'age2', length: 111 })
  age2: string = "";

  @Exclude()
  @Column('varchar', { name: 'age3', length: 111 })
  age3: string = "";

  @Exclude()
  @Column('varchar', { name: 'age4', length: 111 })
  age4: string = "";

  @Exclude()
  @Column('varchar', { name: 'age5', length: 111 })
  age5: string = "";

  @Exclude()
  @Column('varchar', { name: 'age6', length: 111 })
  age6: string = "";

  @Exclude()
  @Column('text', { name: 'relation1' })
  relation1: string = "";

  @Exclude()
  @Column('text', { name: 'relation2' })
  relation2: string = "";

  @Exclude()
  @Column('text', { name: 'relation3' })
  relation3: string = "";

  @Exclude()
  @Column('text', { name: 'relation4' })
  relation4: string = "";

  @Exclude()
  @Column('text', { name: 'relation5' })
  relation5: string = "";

  @Exclude()
  @Column('text', { name: 'relation6' })
  relation6: string = "";

  @Exclude()
  @Column('text', { name: 'eduation1' })
  eduation1: string = "";

  @Exclude()
  @Column('text', { name: 'eduation2' })
  eduation2: string = "";

  @Exclude()
  @Column('text', { name: 'eduation3' })
  eduation3: string = "";

  @Exclude()
  @Column('text', { name: 'eduation4' })
  eduation4: string = "";

  @Exclude()
  @Column('text', { name: 'eduation5' })
  eduation5: string = "";

  @Exclude()
  @Column('text', { name: 'eduation6' })
  eduation6: string = "";

  @Exclude()
  @Column('text', { name: 'occupation1' })
  occupation1: string = "";

  @Exclude()
  @Column('text', { name: 'occupation2' })
  occupation2: string = "";

  @Exclude()
  @Column('text', { name: 'occupation3' })
  occupation3: string = "";

  @Exclude()
  @Column('text', { name: 'occupation4' })
  occupation4: string = "";

  @Exclude()
  @Column('text', { name: 'occupation5' })
  occupation5: string = "";

  @Exclude()
  @Column('text', { name: 'occupation6' })
  occupation6: string = "";

  @Exclude()
  @Column('varchar', { name: 'pre_family6', length: 111 })
  preFamily6: string = "";

  @Exclude()
  @Column('varchar', { name: 'reason', length: 230 })
  reason: string = "";
  
  @Exclude()
  @Column('varchar', { name: 'pre_schl2', length: 100 })
  school_2: string = "";

  @Exclude()
  @Column('varchar', { name: 'enrlno1', length: 255 })
  enroll_1: string = "";

  @Exclude()
  @Column('varchar', { name: 'enrlno2', length: 255 })
  enroll_2: string = "";

  @Exclude()
  @Column('varchar', { name: 'yearfrom1', length: 255 })
  yearFrom_1: string = "";

  @Exclude()
  @Column('varchar', { name: 'yearfrom2', length: 255 })
  yearFrom_2: string = "";

  @Exclude()
  @Column('varchar', { name: 'yearupto1', length: 255 })
  yearUpTo_1: string = "";

  @Exclude()
  @Column('varchar', { name: 'yearupto2', length: 255 })
  yearUpTo_2: string = "";

  @Exclude()
  @Column('text', { name: 'reason1' })
  reason_1: string = "";

  @Exclude()
  @Column('text', { name: 'reason2' })
  reason_2: string = "";
 
  @Column('varchar', { name: 'pre_schl1', length: 111 })
  prevSchool: string = "";


  @Column('varchar', { name: 'pre_number', length: 60 })
  number: string = "";

  @BeforeInsert()
  setDefaults() {
    this.smsNo = this.smsNo || this.contact
    this.admissionDate = new Date()
    this.age = new Date().getFullYear() - new Date(this.dob).getFullYear()
  }

  toJSON() {
    return classToPlain(this);
  }

}
