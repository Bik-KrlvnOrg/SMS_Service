import { Saga, ICommand, ofType, CommandBus } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, map, switchMap } from "rxjs/operators";
import { VoucherEntryCreatedEvent, VoucherEntryUpdatedEvent } from "../voucher/event";
import { CreateFeesPaidCommand, CreateFeesPaidDetailCommand, CreateFeesPaymentCommand, DeleteFeesPaidCommand, DeleteFeesPaymentCommand } from "../command";
import { FeesPaidCreatedEvent, FeesPaidCreatedFailsEvent, FeesPaidDetailCreatedEvent, FeesPaidDetailCreatedFailedEvent, FeesPaymentCreatedEvent } from "../event";
import { DeleteVoucherEntryCommand, UpdateVoucherEntryCommand } from "../voucher/command";
import { CreateFineChargedCommand } from "../fine/command";

@Injectable()
export class FeesSagas {
    logger = new Logger(this.constructor.name)

    constructor(private readonly commandBus: CommandBus) { }

    @Saga()
    voucherEntryCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(VoucherEntryCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                dto.voucherEntryId = event.entity.id
                return new CreateFeesPaymentCommand(dto);
            })
        )
    }

    @Saga()
    feesPaymentCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaymentCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                const dto = event.data.req
                dto.feesId = event.entity.id
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
                dto.feesPaidId = event.entity.id
                return new CreateFeesPaidDetailCommand(dto);
            })
        )
    }

    @Saga()
    feesPaidCreatedFailed = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaidCreatedFailsEvent),
            delay(1000),
            switchMap(async (event) => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                try {
                    const dto = event.data
                    const { voucherEntryId, feesId } = dto

                    await Promise.all([
                        this.commandBus.execute(new DeleteFeesPaymentCommand(feesId)),
                        this.commandBus.execute(new DeleteVoucherEntryCommand(voucherEntryId))
                    ])

                } catch (err) {
                    this.logger.log(err)
                }
                return null
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
                dto.feesPaidDetailId = event.entity.id
                if (!dto.fine) {
                    this.logger.log('No fine was added')
                    return null
                }

                return new CreateFineChargedCommand(dto);
            })
        )
    }

    @Saga()
    feesPaidDetailCreatedFailed = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(FeesPaidDetailCreatedFailedEvent),
            delay(1000),
            switchMap(async (event) => {
                this.logger.log(event, `Inside [FeesSagas] Saga`)
                try {
                    const { feesPaidId, feesId, voucherEntryId } = event.data
                    await Promise.all([
                        this.commandBus.execute(new DeleteFeesPaidCommand(feesPaidId)),
                        this.commandBus.execute(new DeleteFeesPaymentCommand(feesId)),
                        this.commandBus.execute(new DeleteVoucherEntryCommand(voucherEntryId))
                    ])
                } catch (err) {
                    this.logger.log(err)
                }
                return null
            })
        )
    }

}   