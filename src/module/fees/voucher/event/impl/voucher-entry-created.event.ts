import { IEvent } from "@nestjs/cqrs";
import { VoucherEntryEntity } from "../../../../../entities/EsVoucherentry";
import { FeesToPayDto } from "../../../dto";

export class VoucherEntryCreatedEvent implements IEvent {
    constructor(public readonly entity?: VoucherEntryEntity,
        public readonly data?: { req: FeesToPayDto }) { }
}