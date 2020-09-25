import { IEvent } from "@nestjs/cqrs";

export class FeesPaymentDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}