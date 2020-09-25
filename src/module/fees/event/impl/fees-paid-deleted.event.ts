import { IEvent } from "@nestjs/cqrs";

export class FeesPaidDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}