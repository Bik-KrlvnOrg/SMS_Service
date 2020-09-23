import { IQuery } from "@nestjs/cqrs";
import { FindFeesPaidDto } from "../../dto";

export class GetFeesPaidQuery implements IQuery {
    constructor(public readonly request: FindFeesPaidDto) { }
}