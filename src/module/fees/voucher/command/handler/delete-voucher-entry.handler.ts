import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { VoucherEntryRepository } from "../../repository";
import { DeleteVoucherEntryCommand } from "../impl";
import { VoucherEntryDeletedEvent } from "../../event";

@CommandHandler(DeleteVoucherEntryCommand)
export class DeleteVoucherEntryHandler implements ICommandHandler<DeleteVoucherEntryCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(VoucherEntryRepository)
        private readonly voucherRepository: VoucherEntryRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteVoucherEntryCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        const voucher = await this.voucherRepository.findOne({ id: cmd })
        if (!voucher) throw new NotFoundException('voucher entry not found')
        const result = await this.voucherRepository.remove(voucher)
        this.event$.publish(new VoucherEntryDeletedEvent(result))
        return { success: true }
    }
}
