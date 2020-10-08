import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { StaffCreatedEvent } from "../impl";

@EventsHandler(StaffCreatedEvent)
export class StaffCreatedHandler implements IEventHandler<StaffCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: StaffCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}