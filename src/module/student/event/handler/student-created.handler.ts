import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { StudentCreatedEvent } from "../impl";

@EventsHandler(StudentCreatedEvent)
export class StudentCreatedHandler implements IEventHandler<StudentCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: StudentCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}