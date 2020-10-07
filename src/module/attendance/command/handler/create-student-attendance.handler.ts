import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentAttendanceCommand } from "../impl";
import { StudentAttendanceRepository } from "../../repository";
import { StudentAttendanceCreatedEvent } from "../../event";

@CommandHandler(CreateStudentAttendanceCommand)
export class CreateStudentAttendanceHandler implements ICommandHandler<CreateStudentAttendanceCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StudentAttendanceRepository)
        private readonly attendanceRepository: StudentAttendanceRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateStudentAttendanceCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.attendanceRepository.createStudentAttendance(cmd)
            this.event$.publish(new StudentAttendanceCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }
}
