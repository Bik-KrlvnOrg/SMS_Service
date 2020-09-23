import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { VoucherEntryCreatedEvent } from "../impl";

@EventsHandler(VoucherEntryCreatedEvent)
export class VoucherEntryCreatedHandler implements IEventHandler<VoucherEntryCreatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: VoucherEntryCreatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}