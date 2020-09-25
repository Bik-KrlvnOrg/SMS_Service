import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import {  Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeesPaidNewRepository } from "../../repository";
import { FeesNewDto } from "../../dto/fees-new.dto";
import { FeesPaymentCreatedEvent } from "../../event/impl/fees-payment-created.event";
import { CreateFeesPaymentCommand } from "../impl";
import { FeesPaymentCreatedFailedEvent } from "../../event";

@CommandHandler(CreateFeesPaymentCommand)
export class CreateFeesPaymentHandler implements ICommandHandler<CreateFeesPaymentCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidNewRepository)
        private readonly feesRepository: FeesPaidNewRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateFeesPaymentCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const dto: FeesNewDto = {
                balance: cmd.balance.toString(),
                classId: cmd.classId,
                financeMasterId: cmd.financeMasterId,
                paid: cmd.amountPaid.toString(),
                totalAmount: cmd.totalAmount.toString(),
                voucherId: cmd.voucherEntryId,
                studentId: cmd.studentId
            }
            const result = await this.feesRepository.createFeePaidNew(dto)
            cmd.feesId = result.id
            this.event$.publish(new FeesPaymentCreatedEvent(result, { req: cmd }))
            return { success: true }
        } catch (err) {
            const voucherEntryId = command.cmd.voucherEntryId
            this.event$.publish(new FeesPaymentCreatedFailedEvent(voucherEntryId))
            this.logger.log(err)
        }
    }
}
