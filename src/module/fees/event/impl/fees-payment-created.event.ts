import { IEvent } from "@nestjs/cqrs";
import { FeePaidNewEntity } from "../../../../entities/EsFeepaidNew";
import { FeesToPayDto } from "../../dto/fees.dto";

export class FeesPaymentCreatedEvent implements IEvent {
    constructor(public readonly entity: FeePaidNewEntity,
        public readonly data?: { req?: FeesToPayDto }) { }
}