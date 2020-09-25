import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFeesPaidDetailCommand } from "../impl";
import { FeesPaidDetailRepository } from "../../repository";
import { FeesPaidDetailCreatedEvent } from "../../event";
import { FeesPaidDetailDto } from "../../dto";
import { FeesPaidDetailCreatedFailedEvent } from "../../event/impl/fees-paid-detail-created-failed.event";

@CommandHandler(CreateFeesPaidDetailCommand)
export class CreateFeesPaidDetailHandler implements ICommandHandler<CreateFeesPaidDetailCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidDetailRepository)
        private readonly detailRepository: FeesPaidDetailRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateFeesPaidDetailCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const dto: FeesPaidDetailDto = {
                amount: cmd.amountPaid.toString(),
                feeId: cmd.feesId,
                particulars: cmd.particularName
            }
            const result = await this.detailRepository.createFeesPaidNewDetail(dto)
            this.event$.publish(new FeesPaidDetailCreatedEvent(result, { req: cmd }))
            return { success: true }
        } catch (err) {
            const cmd = command.cmd
            this.event$.publish(new FeesPaidDetailCreatedFailedEvent(cmd))
            this.logger.log(err)
        }
    }
}
