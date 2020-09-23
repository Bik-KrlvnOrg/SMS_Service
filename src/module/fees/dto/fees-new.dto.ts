export class FeesNewDto {
    id?: number;

    studentId: number;

    financeMasterId: number;

    classId: number;

    totalAmount: string;

    paid: string;

    balance: string;

    paidOn?: Date;

    voucherId: number;
}