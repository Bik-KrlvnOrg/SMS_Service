import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FineChargedCreatedFailedEvent } from "../impl";

@EventsHandler(FineChargedCreatedFailedEvent)
export class FineChargedCreatedFailedHandler implements IEventHandler<FineChargedCreatedFailedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FineChargedCreatedFailedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}