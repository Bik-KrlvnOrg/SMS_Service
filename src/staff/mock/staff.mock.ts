import { AuthType } from "../../libs";

export const StaffMocks = {
  profileDto: {
    name: 'any_name',
    username: 'any_username',
    dob: 'any_date',
    avatar: 'any_avatar',
    email: 'any_email',
    class: 'any_class',
    gender: 'any_gender',
    bloodGroup: 'any_bloodgroup',
    education: 'any_education',
    regNo: 'any_reg',
    contact: 'any_contact',
    address: 'any_address',
    subject: 'any_subject',
    department: 'any_department',
    toProfile() {
      return this;
    },
  },

  payload: {
    id: 1,
    type: AuthType.STAFF,
    username: 'any_username',
  },

  staffData: {
    stUsername: 'any_username',
    esStaffid: 1,
  },
};
