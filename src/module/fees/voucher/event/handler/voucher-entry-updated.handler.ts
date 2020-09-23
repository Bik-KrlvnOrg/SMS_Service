import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { VoucherEntryUpdatedEvent } from "../impl";

@EventsHandler(VoucherEntryUpdatedEvent)
export class VoucherEntryUpdatedHandler implements IEventHandler<VoucherEntryUpdatedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: VoucherEntryUpdatedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}