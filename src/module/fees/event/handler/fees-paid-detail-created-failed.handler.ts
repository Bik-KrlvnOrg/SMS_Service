import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidDetailCreatedFailedEvent } from "../impl";

@EventsHandler(FeesPaidDetailCreatedFailedEvent)
export class FeesPaidDetailCreatedFailedHandler implements IEventHandler<FeesPaidDetailCreatedFailedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidDetailCreatedFailedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}