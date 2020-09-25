import { IEvent } from "@nestjs/cqrs";

export class VoucherEntryDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}