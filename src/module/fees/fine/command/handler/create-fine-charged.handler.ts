import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFineChargedCommand } from "../impl";
import { FineCollectedRepository } from "../../repository";
import { FineCollectedDto } from "../../dto/fine-collected.dto";
import { FineChargedCreatedEvent } from "../../event/impl/fine-charged-created.event";

@CommandHandler(CreateFineChargedCommand)
export class CreateFineChargedHandler implements ICommandHandler<CreateFineChargedCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FineCollectedRepository)
        private readonly fineRepository: FineCollectedRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateFineChargedCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const dto: FineCollectedDto = {
                amountPaid: cmd.amountPaid,
                classId: cmd.classId,
                fineAmount: cmd.fine,
                feeMasterId: 0,
                deductionAllowed: 0,
                installment: cmd.installment,
                fromDate: new Date(cmd.fromfinanceDate),
                todate: new Date(cmd.tofinanceDate),
                voucherEntryId: cmd.voucherEntryId,
                studentid: cmd.studentId
            }
            const result = await this.fineRepository.createFineCollected(dto)
            this.event$.publish(new FineChargedCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
        }
    }
}
