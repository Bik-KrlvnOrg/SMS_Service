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