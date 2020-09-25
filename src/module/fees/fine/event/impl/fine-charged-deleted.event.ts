import { IEvent } from "@nestjs/cqrs";

export class FineChargedDeletedEvent implements IEvent {
    constructor(public readonly data: any) { }
}