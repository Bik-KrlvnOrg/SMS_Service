import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidDetailDeletedEvent } from "../impl";

@EventsHandler(FeesPaidDetailDeletedEvent)
export class FeesPaidDetailDeletedHandler implements IEventHandler<FeesPaidDetailDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidDetailDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}