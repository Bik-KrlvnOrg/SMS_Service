import { IQuery } from "@nestjs/cqrs";

export class GetStudentProfileQuery implements IQuery {
    constructor(public readonly request: number) { }
}