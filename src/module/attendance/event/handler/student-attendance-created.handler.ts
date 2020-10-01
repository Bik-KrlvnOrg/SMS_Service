import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { StudentAttendanceCreatedEvent } from "../impl";

@EventsHandler(StudentAttendanceCreatedEvent)
export class StudentAttendanceCreatedHandler implements IEventHandler<StudentAttendanceCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: StudentAttendanceCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}