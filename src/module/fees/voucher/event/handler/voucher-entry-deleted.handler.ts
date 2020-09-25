import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { VoucherEntryDeletedEvent } from "../impl";

@EventsHandler(VoucherEntryDeletedEvent)
export class VoucherEntryDeletedHandler implements IEventHandler<VoucherEntryDeletedEvent>{
    logger = new Logger(this.constructor.name)

    handle(event: VoucherEntryDeletedEvent): void {
        this.logger.log(event, event.constructor.name)
    }
}