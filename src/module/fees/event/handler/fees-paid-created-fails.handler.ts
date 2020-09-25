import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaidCreatedFailsEvent } from "../impl";

@EventsHandler(FeesPaidCreatedFailsEvent)
export class FeesPaidCreatedFailsHandler implements IEventHandler<FeesPaidCreatedFailsEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaidCreatedFailsEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}