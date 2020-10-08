import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, classToPlain } from 'class-transformer';
import { Gender, hashPassword, MaritalStatus, StaffType } from '../libs';

@Entity('es_staff', { schema: 'school' })
export class StaffEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'es_staffid' })
  id: number;

  @Column('varchar', { name: 'st_firstname', length: 255 })
  firstName: string;

  @Column('varchar', { name: 'st_lastname', length: 255 })
  lastName: string;

  @Column('varchar', { name: 'st_gender', length: 255 })
  gender: Gender;

  @Column('varchar', { name: 'st_dob', length: 255 })
  dob: string;

  @Column('varchar', { name: 'st_username', length: 255 })
  username: string;

  @Exclude()
  @Column('varchar', { name: 'st_password', length: 255 })
  password: string;

  @Column('varchar', { name: 'st_email', length: 255 })
  email: string;

  @Column('varchar', { name: 'st_prmobno', length: 255 })
  contact: string;

  @Column('varchar', { name: 'image', length: 255 })
  avatar: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_permissions', length: 255 })
  permissions: string;

  @Column('varchar', { name: 'st_pradress', length: 255 })
  address: string;

  @Column('enum', {
    name: 'tcstatus',
    enum: ['notissued', 'issued', 'resigned'],
  })
  teachingStatus: 'notissued' | 'issued' | 'resigned' = "notissued";

  @Column('enum', {
    name: 'status',
    enum: ['selected', 'notselected', 'onhold', 'added', 'dismisied'],
  })
  status: 'selected' | 'notselected' | 'onhold' | 'added' | 'dismisied' = "added";

  @Column('enum', {
    name: 'selstatus',
    enum: ['issued', 'notissued', 'accepted', 'notaccepted'],
  })
  employmentStatus: 'issued' | 'notissued' | 'accepted' | 'notaccepted' = "accepted";

  @Column('enum', {
    name: 'teach_nonteach',
    enum: ['teaching', 'nonteaching'],
    default: () => "'teaching'",
  })
  staffType: StaffType

  @Column('varchar', { name: 'st_department', length: 255 })
  departmentId: number;

  @Column('varchar', { name: 'st_class', length: 255 })
  classId: number;

  @Column('varchar', { name: 'st_bloodgroup', length: 255 })
  bloodGroup: string = "";

  @Column('varchar', { name: 'st_marital', length: 255 })
  maritalStatus: MaritalStatus = MaritalStatus.NOT_MARRIED;

  @Column('varchar', { name: 'st_basic', length: 255 })
  baseSalary: string = "";

  @Column('varchar', { name: 'st_subject', length: 255 })
  subjectId: number;

  @Column('varchar', { name: 'st_post', length: 255 })
  positionId: number;

  @Column('varchar', { name: 'st_dateofjoining', length: 255 })
  dateOfJoining: Date = new Date();

  @Column('varchar', { name: 'terminationdate', length: 255 })
  terminationDate: string = "";

  @Column('varchar', { name: 'st_remarks', length: 255 })
  remarks: string = "";

  @Column('varchar', { name: 'st_prcountry', length: 255 })
  country: string = "";

  @Column('varchar', { name: 'st_pecity', length: 255 })
  city: string = "";

  @Column('varchar', { name: 'st_noofsons', length: 255 })
  nationality: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_fthname', length: 255 })
  fatherName: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_fatherhusname', length: 255 })
  stFatherhusname: string = "";

  @Exclude()
  @Column('int', { name: 'st_noofdughters' })
  stNoofdughters: number = 0;

  @Exclude()
  @Column('varchar', { name: 'st_postaplied', length: 255 })
  stPostaplied: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_faminfo', length: 255 })
  stFaminfo: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_hobbies', length: 255 })
  stHobbies: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_experience', length: 255 })
  stExperience: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_attach1', length: 255 })
  stAttach1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_attach2', length: 255 })
  stAttach2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_attach3', length: 255 })
  stAttach3: string;

  @Exclude()
  @Column('varchar', { name: 'st_attach4', length: 255 })
  stAttach4: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_category', length: 255 })
  stCategory: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_mobilenocomunication', length: 255 })
  stMobilenocomunication: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_examp1', length: 255 })
  stExamp1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_examp2', length: 255 })
  stExamp2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_examp3', length: 255 })
  stExamp3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_borduniversity1', length: 255 })
  stBorduniversity1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_borduniversity2', length: 255 })
  stBorduniversity2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_primarysubject', length: 255 })
  primarysubject: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_borduniversity3', length: 255 })
  stBorduniversity3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_year1', length: 255 })
  stYear1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_year2', length: 255 })
  stYear2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_year3', length: 255 })
  stYear3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_insititute1', length: 255 })
  stInsititute1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_insititute2', length: 255 })
  stInsititute2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_insititute3', length: 255 })
  stInsititute3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_position1', length: 255 })
  stPosition1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_position2', length: 255 })
  stPosition2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_position3', length: 255 })
  stPosition3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_period1', length: 255 })
  stPeriod1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_period2', length: 255 })
  stPeriod2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_period3', length: 255 })
  stPeriod3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_prcity', length: 255 })
  stPrcity: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_prpincode', length: 255 })
  stPrpincode: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_prphonecode', length: 255 })
  stPrphonecode: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_prstate', length: 255 })
  stPrstate: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_prresino', length: 255 })
  stPrresino: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_peadress', length: 255 })
  stPeadress: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_pepincode', length: 255 })
  stPepincode: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_pephoneno', length: 255 })
  stPephoneno: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_pestate', length: 255 })
  stPestate: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_peresino', length: 255 })
  stPeresino: string;

  @Exclude()
  @Column('varchar', { name: 'st_pecountry', length: 255 })
  stPecountry: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_pemobileno', length: 255 })
  stPemobileno: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refposname1', length: 255 })
  stRefposname1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refposname2', length: 255 })
  stRefposname2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refposname3', length: 255 })
  stRefposname3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refdesignation1', length: 255 })
  stRefdesignation1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refdesignation2', length: 255 })
  stRefdesignation2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refdesignation3', length: 255 })
  stRefdesignation3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refinsititute1', length: 255 })
  stRefinsititute1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refinsititute2', length: 255 })
  stRefinsititute2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refinsititute3', length: 255 })
  stRefinsititute3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refemail1', length: 255 })
  stRefemail1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refemail2', length: 255 })
  stRefemail2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_refemail3', length: 255 })
  stRefemail3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_writentest', length: 255 })
  stWritentest: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_technicalinterview', length: 255 })
  stTechnicalinterview: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_finalinterview', length: 255 })
  stFinalinterview: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_perviouspackage', length: 255 })
  stPerviouspackage: string = "";

  @Exclude()
  @Column('date', { name: 'intdate' })
  intdate: Date = new Date();

  @Exclude()
  @Column('varchar', { name: 'st_theme', length: 255 })
  stTheme: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_qualification', length: 255 })
  stQualification: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_marks1', length: 255 })
  stMarks1: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_marks2', length: 255 })
  stMarks2: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_marks3', length: 255 })
  stMarks3: string = "";

  @Exclude()
  @Column('varchar', { name: 'st_emailsend', length: 255 })
  stEmailsend: string = "";

  @Exclude()
  @Column('varchar', { name: 'hrdsid', length: 255 })
  hrdsid: string;

  @Exclude()
  @Column('varchar', { name: 'st_mail', length: 222 })
  stMail: string = "";

  @Exclude()
  @Column('varchar', { name: 'mamber1', length: 255 })
  mamber1: string = "";

  @Exclude()
  @Column('varchar', { name: 'mamber2', length: 255 })
  mamber2: string = "";

  @Exclude()
  @Column('varchar', { name: 'mamber3', length: 255 })
  mamber3: string = "";

  @Exclude()
  @Column('varchar', { name: 'mamber4', length: 255 })
  mamber4: string = "";

  @Exclude()
  @Column('varchar', { name: 'mamber5', length: 255 })
  mamber5: string = "";

  @Exclude()
  @Column('int', { name: 'age1' })
  age1: number = 0;

  @Exclude()
  @Column('int', { name: 'age2' })
  age2: number = 0;

  @Exclude()
  @Column('int', { name: 'age3' })
  age3: number = 0;

  @Exclude()
  @Column('int', { name: 'age4' })
  age4: number = 0;

  @Exclude()
  @Column('int', { name: 'age5' })
  age5: number = 0;

  @Exclude()
  @Column('varchar', { name: 'relation1', length: 255 })
  relation1: string = "";

  @Exclude()
  @Column('varchar', { name: 'relation2', length: 255 })
  relation2: string;

  @Exclude()
  @Column('varchar', { name: 'relation3', length: 255 })
  relation3: string = "";

  @Exclude()
  @Column('varchar', { name: 'relation4', length: 255 })
  relation4: string = "";

  @Exclude()
  @Column('varchar', { name: 'relation5', length: 255 })
  relation5: string = "";

  @Exclude()
  @Column('varchar', { name: 'education1', length: 255 })
  education1: string = "";

  @Exclude()
  @Column('varchar', { name: 'education2', length: 255 })
  education2: string = "";

  @Exclude()
  @Column('varchar', { name: 'education3', length: 255 })
  education3: string = "";

  @Column('varchar', { name: 'education4', length: 255 })
  education4: string = "";

  @Exclude()
  @Column('varchar', { name: 'education5', length: 255 })
  education5: string = "";

  @Exclude()
  @Column('varchar', { name: 'occupation1', length: 255 })
  occupation1: string;

  @Exclude()
  @Column('varchar', { name: 'occupation2', length: 255 })
  occupation2: string = "";

  @Exclude()
  @Column('varchar', { name: 'occupation3', length: 255 })
  occupation3: string = "";

  @Exclude()
  @Column('varchar', { name: 'occupation4', length: 255 })
  occupation4: string = "";

  @Exclude()
  @Column('varchar', { name: 'occupation5', length: 255 })
  occupation5: string = "";

  @BeforeInsert()
  async applyPasswordHash(): Promise<void> {
    this.password = await hashPassword(this.password)
  }

  toJSON() {
    return classToPlain(this);
  }
}
