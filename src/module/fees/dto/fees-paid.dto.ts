import { IsDateString, IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class FeesPaidDto {
    id?: number;

    studentId: number;

    classId: number;

    particularId: number;

    particulartName: string;

    feeAmount: number;

    createdDate?: Date;

    academicYear?: string;

    comments?: string;

    installment: number;

    fromDate: Date;

    toDate: Date;

    voucherEntryId: number;

    waived?: string;
}

export class FindFeesPaidDto {
    @IsOptional()
    @IsNumberString()
    studentId?: number

    @IsOptional()
    @IsDateString()
    fromDate?: Date;

    @IsOptional()
    @IsDateString()
    toDate?: Date;
}