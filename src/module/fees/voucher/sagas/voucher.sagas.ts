import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { FeesPaymentCreatedFailedEvent } from "../../event";
import { DeleteVoucherEntryCommand } from "../command";

@Injectable()
export class VoucherSagas {
    logger = new Logger(this.constructor.name)

    @Saga()
    feesPaymentFailed = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaymentCreatedFailedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [VoucherSagas] Saga`)
                return new DeleteVoucherEntryCommand(event.data);
            })
        )
    }

}