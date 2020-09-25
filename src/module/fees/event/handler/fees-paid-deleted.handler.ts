import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidDeletedEvent } from "../impl";

@EventsHandler(FeesPaidDeletedEvent)
export class FeesPaidDeletedHandler implements IEventHandler<FeesPaidDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}