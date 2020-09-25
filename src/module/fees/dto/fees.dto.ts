import { Type } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumberString, IsObject, IsOptional, IsString, min, MinLength, minLength, ValidateNested } from "class-validator"
import { PaymentType } from "../../../libs"

export class BankDto {
    @IsOptional()
    @MinLength(2)
    name: string

    @IsOptional()
    @IsNumberString()
    accountNumber: string

    @IsOptional()
    @IsNumberString()
    chequeNumber: string

    @IsOptional()
    @IsNumberString()
    tellerNumber: number

    @IsOptional()
    @IsNumberString()
    pin: number

    @IsOptional()
    @IsString()
    narration: string

}

export class FeesToPayDto {
    @IsNumberString()
    studentId: number

    @IsNumberString()
    classId: number

    @IsNumberString()
    amountPaid: number

    @IsOptional()
    @IsNumberString()
    fine: number

    @IsNumberString()
    totalAmount: number

    @IsNumberString()
    balance: number

    @IsNotEmpty()
    voucherMode: string

    @IsNotEmpty()
    voucherType: string

    @IsNotEmpty()
    ledgerName: string

    @IsEnum(PaymentType)
    paymentType: PaymentType

    @IsNumberString()
    financeMasterId: number

    @IsOptional()
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => BankDto)
    bank: BankDto

    @IsNotEmpty()
    fromfinanceDate: string

    @IsNotEmpty()
    tofinanceDate: string

    particularName?: string
    
    installment?: number
    
    voucherEntryId?: number
    feesId?: number
    feesPaidId?: number
    feesPaidDetailId?: number
}