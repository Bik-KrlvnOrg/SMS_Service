import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeesPaidDetailRepository } from "../../repository";
import { DeleteFeesPaidDetailCommand } from "../impl";
import { FeesPaidDetailDeletedEvent } from "../../event";

@CommandHandler(DeleteFeesPaidDetailCommand)
export class DeleteFeesPaidDetailHandler implements ICommandHandler<DeleteFeesPaidDetailCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidDetailRepository)
        private readonly detailRepository: FeesPaidDetailRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteFeesPaidDetailCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        const detail = await this.detailRepository.findOne({ id: cmd })
        if (!detail) throw new NotFoundException(`fees paid detail not found for id: ${cmd} `)
        const result = await this.detailRepository.remove(detail)
        this.event$.publish(new FeesPaidDetailDeletedEvent(result))
        return { success: true }
    }
}
