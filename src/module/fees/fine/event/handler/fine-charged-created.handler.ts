import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FineChargedCreatedEvent } from "../impl";

@EventsHandler(FineChargedCreatedEvent)
export class FineChargedCreatedHandler implements IEventHandler<FineChargedCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FineChargedCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}