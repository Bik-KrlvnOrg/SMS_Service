import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { StaffAttendanceCreatedEvent } from "../impl";

@EventsHandler(StaffAttendanceCreatedEvent)
export class StaffAttendanceCreatedHandler implements IEventHandler<StaffAttendanceCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: StaffAttendanceCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}