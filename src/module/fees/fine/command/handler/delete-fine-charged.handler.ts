import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FineCollectedRepository } from "../../repository";
import { DeleteFineChargedCommand } from "../impl";
import { FineChargedDeletedEvent } from "../../event";

@CommandHandler(DeleteFineChargedCommand)
export class DeleteFineChargedHandler implements ICommandHandler<DeleteFineChargedCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FineCollectedRepository)
        private readonly fineRepository: FineCollectedRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: DeleteFineChargedCommand): Promise<any> {
        this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
        const { cmd } = command;
        const fine = await this.fineRepository.findOne({ id: cmd })
        if (!fine) throw new NotFoundException(`fine collected not found for id: ${cmd}`)
        const result = await this.fineRepository.remove(fine)
        this.event$.publish(new FineChargedDeletedEvent(result))
        return { success: true }
    }
}
