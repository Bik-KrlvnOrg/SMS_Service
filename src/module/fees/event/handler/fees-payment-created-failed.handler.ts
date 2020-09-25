import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaymentCreatedFailedEvent } from "../impl";

@EventsHandler(FeesPaymentCreatedFailedEvent)
export class FeesPaymentCreatedFailedHandler implements IEventHandler<FeesPaymentCreatedFailedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaymentCreatedFailedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}