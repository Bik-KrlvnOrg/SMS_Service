export class VoucherEntryDto {
    id?: number;

    voucherType: string;

    receiptNo: string;

    receiptDate?: Date;

    paymentMode: string;

    bankAccount: string;

    particulars: string;

    amount: number;

    narration: string;

    voucherMode: string;

    chequeNo: string;

    tellerNumber: number;

    bankPin: number;

    bankName: string;

    fromfinanceDate: Date;

    tofinanceDate: Date;

}