export class StudentProfileDto {
  personal: StudentPersonal;
  parent: StudentParent;
}

export class StudentPersonal {
  username: string;
  name: string;
  regNo: string;
  class: string;
  gender: string;
  section: string;
  dob: string;
  avatar: string;
  bloodGroup: string;
  address: string;
}

export class StudentParent {
  father: string;
  mother: string;
  contact: string;
  occupation: string;
}
