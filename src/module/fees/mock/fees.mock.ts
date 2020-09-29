import { FeesPaidEntity } from "../../../entities/EsFeepaid";
import { FeePaidNewEntity } from "../../../entities/EsFeepaidNew";
import { FeePaidNewDetailsEntity } from "../../../entities/EsFeepaidNewDetails";
import { PaymentType } from "../../../libs";
import { FeesNewDto, FeesPaidDetailDto, FeesPaidDto, FeesToPayDto } from "../dto";

export class FeesMock {
    static getFeesToPay(): FeesToPayDto {
        return {
            amountPaid: 280,
            balance: 10,
            classId: 1,
            financeMasterId: 1,
            fromfinanceDate: "2014-01-01",
            paymentType: PaymentType.CASH,
            ledgerName: "ADMISSION",
            studentId: 1,
            tofinanceDate: "2015-01-31",
            voucherMode: "",
            fine: 0,
            totalAmount: 280,
            voucherType: "",
            bank: {
                accountNumber: "any account number",
                name: "any name",
                chequeNumber: "any check number",
                narration: "any narration",
                pin: 0,
                tellerNumber: 0
            },
            feesId: 1,
            feesPaidDetailId: 1,
            feesPaidId: 1,
            installment: 1,
            particularName: "any particular",
            voucherEntryId: 1
        }

    }

    static getFeesPaidDetailDto(): FeesPaidDetailDto {
        const { amountPaid, feesId, particularName } = this.getFeesToPay()
        return {
            amount: amountPaid.toString(),
            feeId: feesId,
            id: 1,
            particulars: particularName,
            createdOn: new Date()
        }
    }

    static getFeesPaidDetailEntity(): FeePaidNewDetailsEntity {
        return this.getFeesPaidDetailDto() as FeePaidNewDetailsEntity
    }

    static getFeesPaidDto(): FeesPaidDto {
        const { studentId, voucherEntryId, amountPaid, tofinanceDate, fromfinanceDate, classId } = this.getFeesToPay()
        return {
            classId,
            feeAmount: amountPaid,
            installment: 1,
            fromDate: new Date(fromfinanceDate),
            toDate: new Date(tofinanceDate),
            voucherEntryId: voucherEntryId,
            particularId: 1,
            particulartName: "any particular",
            studentId
        }
    }

    static getFeesPaidEntity(): FeesPaidEntity {
        return this.getFeesPaidDto() as FeesPaidEntity
    }

    static getFeesPaidNewDto(): FeesNewDto {
        return {
            balance: '50',
            classId: 1,
            financeMasterId: 1,
            paid: '100',
            studentId: 1,
            totalAmount: '100',
            voucherId: 1,
            id: 1,
            paidOn: new Date()
        }
    }

    static getFeesPaidNewEntity(): FeePaidNewEntity {
        return this.getFeesPaidNewDto() as FeePaidNewEntity
    }
}