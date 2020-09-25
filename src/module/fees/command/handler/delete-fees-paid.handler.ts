import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteFeesPaidCommand } from "../impl";
import { FeesPaidRepository } from "../../repository";
import { FeesPaidDeletedEvent } from "../../event";

@CommandHandler(DeleteFeesPaidCommand)
export class DeleteFeesPaidHandler implements ICommandHandler<DeleteFeesPaidCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidRepository)
        private readonly paidRepository: FeesPaidRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteFeesPaidCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        const paid = await this.paidRepository.findOne({ id: cmd })
        if (!paid) throw new NotFoundException(`fees paid not found for id: ${cmd}`)
        const result = await this.paidRepository.remove(paid)
        this.event$.publish(new FeesPaidDeletedEvent(result))
        return { success: true }
    }
}
