import { IEvent } from "@nestjs/cqrs";

export class StaffAttendanceCreatedEvent implements IEvent {
    constructor(public readonly data: any) { }
}