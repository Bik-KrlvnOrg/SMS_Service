import { IEvent } from "@nestjs/cqrs";

export class FeesPaymentCreatedFailedEvent implements IEvent {
    constructor(public readonly data: number) { }
}