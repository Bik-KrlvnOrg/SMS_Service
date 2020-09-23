import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VoucherEntryRepository } from "../../repository";
import { UpdateVoucherEntryCommand } from "../impl";
import { VoucherEntryUpdatedEvent } from "../../event";

@CommandHandler(UpdateVoucherEntryCommand)
export class UpdateVoucherEntryHandler implements ICommandHandler<UpdateVoucherEntryCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(VoucherEntryRepository)
        private readonly voucherRepository: VoucherEntryRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: UpdateVoucherEntryCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const voucher = await this.voucherRepository.findOne({ where: { id: cmd.voucherEntryId } })
            if (!voucher) throw new Error('voucher not found')
            voucher.receiptNo = `feepaid_${cmd.feesId}`
            const result = await this.voucherRepository.save(voucher)
            this.event$.publish(new VoucherEntryUpdatedEvent(result, { req: cmd }))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
        }
    }
}
