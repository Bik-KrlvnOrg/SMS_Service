import { IEvent } from "@nestjs/cqrs";

export class FeesPaidDetailDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}