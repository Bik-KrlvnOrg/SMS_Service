import { Saga, ICommand, ofType, CommandBus } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { FineChargedCreatedFailedEvent } from "../event";
import { DeleteFeesPaidCommand, DeleteFeesPaidDetailCommand, DeleteFeesPaymentCommand } from "../../command";
import { DeleteVoucherEntryCommand } from "../../voucher/command";

@Injectable()
export class FineSagas {
    logger = new Logger(this.constructor.name)
    constructor(private readonly commandBus: CommandBus) { }

    @Saga()
    fineChargedCreatedFailed = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FineChargedCreatedFailedEvent),
            delay(1000),
            switchMap(async (event) => {
                this.logger.log(event, `Inside [FineSagas] Saga`)
                const { feesPaidDetailId, feesPaidId, feesId, voucherEntryId } = event.data
                await Promise.all([
                    this.commandBus.execute(new DeleteFeesPaidDetailCommand(feesPaidDetailId)),
                    this.commandBus.execute(new DeleteFeesPaidCommand(feesPaidId)),
                    this.commandBus.execute(new DeleteFeesPaymentCommand(feesId)),
                    this.commandBus.execute(new DeleteVoucherEntryCommand(voucherEntryId)),
                ])
                return null;
            })
        )
    }

}