export enum AuthType {
  ADMIN = 'admin',
  STAFF = 'staff',
  STUDENT = 'student',
}

export enum ReadStatus {
  UN_READ = 'Unread',
  READ = 'Read'
}

export enum MessageStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'inactive',
  DELETED = 'deleted'
}

export enum ReplyStatus {
  NOT_REPLIED = 'notreplied',
  REPLIED = 'replied'
}

export enum PaymentType {
  CASH = 'cash',
  CHEQUE = 'cheque'
}

export enum AccountStatus {
  ACTIVE = 'active',
  IN_ACTIVE = 'inactive'
}

export enum AcademicStatus {
  PASS = 'pass',
  FAIL = 'fail',
  AWAITING = 'resultawaiting',
  IN_ACTIVE = 'inactive'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export enum AttendanceStatus {
  PRESENT = 'P',
  ABSENT = 'A'
}

export enum StaffRemarks {
  PAID_LEAVE = 'PAID LEAVE',
  UN_PAID_LEAVE = 'UNPAID LEAVE'
}


export enum RecordSort {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum StaffType {
  TEACHING = 'teaching',
  NON_TEACHING = 'nonteaching'
}

export enum MaritalStatus {
  MARRIED = 'Married',
  NOT_MARRIED = 'Unmarried',
}

export const QUEUE_PROCESS_ID = {
  staffRegistered: 'staffRegistered',
};

export const QUEUE_PROCESSOR = {
  NOTIFICATION: 'notification_queue',
};

export const PROVIDERS = {
  HUBTEL_SERVICE: 'HUBTEL_SERVICE',
};


export enum ParentType {
  FATHER = 'father',
  MOTHER = 'mother',
  GUARDIAN = 'guardian'
}

export const RESOURCE_DEFINITION = {
  ROLES_KEY: 'roles',
}