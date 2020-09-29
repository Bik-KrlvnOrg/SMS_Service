import { IEvent } from "@nestjs/cqrs";

export class StudentCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}