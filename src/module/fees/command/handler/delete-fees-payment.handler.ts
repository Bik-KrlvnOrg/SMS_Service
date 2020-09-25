import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeesPaidNewRepository } from "../../repository";
import { DeleteFeesPaymentCommand } from "../impl";
import { FeesPaymentDeletedEvent } from "../../event";

@CommandHandler(DeleteFeesPaymentCommand)
export class DeleteFeesPaymentHandler implements ICommandHandler<DeleteFeesPaymentCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidNewRepository)
        private readonly feesRepository: FeesPaidNewRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteFeesPaymentCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        const entity = await this.feesRepository.findOne({ id: cmd })
        if (!entity) throw new NotFoundException(`fees payment not found for id: ${cmd}`)
        const result = await this.feesRepository.remove(entity)
        this.event$.publish(new FeesPaymentDeletedEvent(result))
        return { success: true }
    }
}
