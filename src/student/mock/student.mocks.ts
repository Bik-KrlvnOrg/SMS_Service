import { AuthType } from '../../auth/enum/auth.enum';

export const StudentMocks = {
  credential: {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STUDENT,
  },

  payload: {
    username: 'any_username',
    id: 1,
    type: AuthType.STUDENT,
  },

  studentData: {
    preStudentUsername: 'any_username',
    esPreadmissionid: 1,
  },

  profileData: {
    preStudentUsername: 'any_username',
    preName: 'any_name',
    admissionId: '1',
    preClass: 'any_class',
    preGender: 'any_gender',
    preSec: 'any_section',
    preDateofbirth: '1996-01-01',
    preImage: 'any_image_url',
    preBloodGroup: 'any_blood_type',
    preAddress: 'any_address',
    preFathername: 'any_father_name',
    preMothername: 'any_mother_name',
    preContactno: 'any_contact',
    occupation1: 'any_occupation',
  },

  profileDto: {
    personal: {
      username: 'any_username',
      name: 'any_name',
      regNo: '1',
      class: 'any_class',
      gender: 'any_gender',
      section: 'any_section',
      dob: '01 Jan 1996',
      avatar: 'any_image_url',
      bloodGroup: 'any_blood_type',
      address: 'any_address',
    },
    parent: {
      father: 'any_father_name',
      mother: 'any_mother_name',
      contact: 'any_contact',
      occupation: 'any_occupation',
    },

    toProfile(){
      return this;
    }
  },
};
