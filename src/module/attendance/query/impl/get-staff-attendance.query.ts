import { IQuery } from "@nestjs/cqrs";
import { FindOptionsDto } from "../../../../libs";

export class GetStaffAttendanceQuery implements IQuery {
    constructor(public readonly request: FindOptionsDto) { }
}