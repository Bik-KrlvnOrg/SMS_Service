import { IEvent } from "@nestjs/cqrs";
import { FeesToPayDto } from "../../dto";

export class FeesPaidCreatedFailsEvent implements IEvent {
    constructor(public readonly data: FeesToPayDto) { }
}