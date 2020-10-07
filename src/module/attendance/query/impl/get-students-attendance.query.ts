import { IQuery } from "@nestjs/cqrs";
import { FindOptionsDto } from "../../../../libs";

export class GetStudentsAttendanceQuery implements IQuery {
    constructor(public readonly request: FindOptionsDto) { }
}