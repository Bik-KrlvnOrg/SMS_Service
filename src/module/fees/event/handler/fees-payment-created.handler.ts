import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaymentCreatedEvent } from "../impl";

@EventsHandler(FeesPaymentCreatedEvent)
export class FeesPaymentCreatedHandler implements IEventHandler<FeesPaymentCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaymentCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}