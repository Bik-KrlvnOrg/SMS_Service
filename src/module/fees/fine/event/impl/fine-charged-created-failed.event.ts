import { IEvent } from "@nestjs/cqrs";
import { FeesToPayDto } from "../../../dto";

export class FineChargedCreatedFailedEvent implements IEvent {
    constructor(public readonly data: FeesToPayDto) { }
}