import { IEvent } from "@nestjs/cqrs";
import { FeePaidNewDetailsEntity } from "../../../../entities/EsFeepaidNewDetails";
import { FeesToPayDto } from "../../dto/fees.dto";

export class FeesPaidDetailCreatedEvent implements IEvent {
    constructor(public readonly entity: FeePaidNewDetailsEntity,public readonly data?: { req: FeesToPayDto }) { }
}