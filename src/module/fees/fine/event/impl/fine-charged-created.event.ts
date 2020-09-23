import { IEvent } from "@nestjs/cqrs";
import { FineCollectedEntity } from "../../../../../entities/EsFineChargedCollected";

export class FineChargedCreatedEvent implements IEvent {
    constructor(public readonly data: FineCollectedEntity) { }
}