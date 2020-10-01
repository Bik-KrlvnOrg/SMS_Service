import { IEvent } from "@nestjs/cqrs";

export class StudentAttendanceCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}