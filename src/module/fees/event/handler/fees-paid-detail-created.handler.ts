import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidDetailCreatedEvent } from "../impl";

@EventsHandler(FeesPaidDetailCreatedEvent)
export class FeesPaidDetailCreatedHandler implements IEventHandler<FeesPaidDetailCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidDetailCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}