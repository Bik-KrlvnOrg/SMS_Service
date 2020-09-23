import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidCreatedEvent } from "../impl";

@EventsHandler(FeesPaidCreatedEvent)
export class FeesPaidCreatedHandler implements IEventHandler<FeesPaidCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}