import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { VoucherEntryCreatedEvent, VoucherEntryUpdatedEvent } from "../voucher/event";
import { CreateFeesPaidCommand, CreateFeesPaidDetailCommand, CreateFeesPaymentCommand } from "../command";
import { FeesPaidCreatedEvent, FeesPaidDetailCreatedEvent, FeesPaymentCreatedEvent } from "../event";
import { UpdateVoucherEntryCommand } from "../voucher/command";
import { CreateFineChargedCommand } from "../fine/command";

@Injectable()
export class FeesSagas {
    logger = new Logger(this.constructor.name)

    @Saga()
    voucherEntryCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(VoucherEntryCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                return new CreateFeesPaymentCommand(dto);
            })
        )
    }

    @Saga()
    feesPaidNewCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaymentCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                return new UpdateVoucherEntryCommand(dto);
            })
        )
    }

    @Saga()
    voucherUpdated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(VoucherEntryUpdatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                return new CreateFeesPaidCommand(dto);
            })
        )
    }

    @Saga()
    feesPaidCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaidCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                return new CreateFeesPaidDetailCommand(dto);
            })
        )
    }

    @Saga()
    feesPaidDetailCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaidDetailCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                if (!dto.fine) {
                    this.logger.log('No fine was added')
                    return null
                }

                return new CreateFineChargedCommand(dto);
            })
        )
    }

}   