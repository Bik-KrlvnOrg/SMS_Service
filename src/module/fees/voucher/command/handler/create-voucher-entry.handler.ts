import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { BadRequestException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VoucherEntryRepository } from "../../repository";
import { CreateVoucherEntryCommand } from "../impl";
import { VoucherEntryCreatedEvent } from "../../event";
import { PaymentType } from "../../../../../libs";
import { VoucherEntryDto } from "../../dto";
import { BankDto, FeesToPayDto } from "../../../dto";

@CommandHandler(CreateVoucherEntryCommand)
export class CreateVoucherEntryHandler implements ICommandHandler<CreateVoucherEntryCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(VoucherEntryRepository)
        private readonly voucherRepository: VoucherEntryRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateVoucherEntryCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        let bank = cmd.bank
        console.log('vounentr', cmd)

        if (cmd.paymentType === PaymentType.CHEQUE) {
            const errors = []
            if (!bank) throw new BadRequestException('bank should be an object')
            if (!bank.name) errors.push('bank.name should not be empty')
            if (!bank.accountNumber) errors.push('bank.accountNumber should not be empty')
            if (!bank.chequeNumber) errors.push('bank.chequeNumber should not be empty')
            if (errors.length) throw new BadRequestException(errors)
        } else {
            bank = this.setBankInfoToDefault(cmd)
        }

        const dto: VoucherEntryDto = {
            amount: cmd.amountPaid,
            bankAccount: bank.accountNumber,
            bankName: bank.name,
            bankPin: bank.pin,
            chequeNo: bank.chequeNumber,
            fromfinanceDate: new Date(cmd.fromfinanceDate),
            tofinanceDate: new Date(cmd.tofinanceDate),
            narration: bank.narration,
            particulars: cmd.ledgerName,
            paymentMode: cmd.paymentType,
            tellerNumber: bank.tellerNumber,
            voucherMode: cmd.voucherMode,
            voucherType: cmd.voucherType,
            receiptNo: 'fees_',
        }

        console.log('dto', dto)
        const result = await this.voucherRepository.createVoucherEntry(dto)
        cmd.voucherEntryId = result.id
        this.event$.publish(new VoucherEntryCreatedEvent(result, { req: cmd }))
        return { status: "pending" }
    }

    private setBankInfoToDefault(req: FeesToPayDto): BankDto {
        const bank: BankDto = {
            name: "",
            accountNumber: "",
            chequeNumber: "",
            narration: "",
            pin: 0,
            tellerNumber: 0
        }
        return bank
    }
}

