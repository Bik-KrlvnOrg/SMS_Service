import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { FeesPaymentDeletedEvent } from "../impl";

@EventsHandler(FeesPaymentDeletedEvent)
export class FeesPaymentDeletedHandler implements IEventHandler<FeesPaymentDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: FeesPaymentDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}