import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { InternalServerErrorException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentCommand } from "../impl";
import { StudentRepository } from "../../repository";
import { StudentCreatedEvent } from "../../event";

@CommandHandler(CreateStudentCommand)
export class CreateStudentHandler implements ICommandHandler<CreateStudentCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(StudentRepository)
        private readonly admissionRepository: StudentRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateStudentCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const result = await this.admissionRepository.createAdmission(cmd)
            this.event$.publish(new StudentCreatedEvent(result))
            return { success: true }
        } catch (err) {
            this.logger.log(err)
            throw new InternalServerErrorException(err.message)
        }
    }
}
