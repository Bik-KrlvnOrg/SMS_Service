import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStaffCommand } from "../impl";
import { StaffCreatedEvent } from "../../event";
import { StaffRepository } from "../../repository";
import { StaffEntity } from "../../../../entities/EsStaff";

@CommandHandler(CreateStaffCommand)
export class CreateStaffHandler implements ICommandHandler<CreateStaffCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StaffRepository)
        private readonly staffRepository: StaffRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateStaffCommand): Promise<Partial<StaffEntity>> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.staffRepository.createStaff(cmd)
            this.event$.publish(new StaffCreatedEvent(result))
            return result
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }
}
