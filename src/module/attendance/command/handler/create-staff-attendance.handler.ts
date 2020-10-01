import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStaffAttendanceCommand } from "../impl";
import { StaffAttendanceRepository } from "../../repository";
import { StaffAttendanceCreatedEvent } from "../../event";

@CommandHandler(CreateStaffAttendanceCommand)
export class CreateStaffAttendanceHandler implements ICommandHandler<CreateStaffAttendanceCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StaffAttendanceRepository)
        private readonly attendanceRepository: StaffAttendanceRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateStaffAttendanceCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.attendanceRepository.createStaffAttendance(cmd)
            this.event$.publish(new StaffAttendanceCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }
}
