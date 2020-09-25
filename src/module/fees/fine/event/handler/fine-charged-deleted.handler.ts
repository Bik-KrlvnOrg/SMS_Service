import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FineChargedDeletedEvent } from "../impl";

@EventsHandler(FineChargedDeletedEvent)
export class FineChargedDeletedHandler implements IEventHandler<FineChargedDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FineChargedDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}