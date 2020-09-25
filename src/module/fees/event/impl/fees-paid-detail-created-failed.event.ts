import { IEvent } from "@nestjs/cqrs";
import { FeesToPayDto } from "../../dto";

export class FeesPaidDetailCreatedFailedEvent implements IEvent {
    constructor(public readonly data: FeesToPayDto) { }
}