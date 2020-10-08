import { IEvent } from "@nestjs/cqrs";

export class StaffCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}