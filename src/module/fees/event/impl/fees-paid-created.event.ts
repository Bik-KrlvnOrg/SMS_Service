import { IEvent } from "@nestjs/cqrs";
import { FeesPaidEntity } from "../../../../entities/EsFeepaid";
import { FeesToPayDto } from "../../dto/fees.dto";

export class FeesPaidCreatedEvent implements IEvent {
    constructor(public readonly entity: FeesPaidEntity, public readonly data?: { req?: FeesToPayDto }) { }
}