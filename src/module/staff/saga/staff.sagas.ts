import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { Injectable, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { StaffCreatedEvent } from "../event";
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";
import { QUEUE_PROCESSOR, QUEUE_PROCESS_ID } from "../../../libs";

@Injectable()
export class StaffSagas {
    logger = new Logger(this.constructor.name)
    constructor(@InjectQueue(QUEUE_PROCESSOR.NOTIFICATION) private readonly queue: Queue) { }


    @Saga()
    staffCreated = (event$: Observable<any>): Observable<ICommand> => {
        return event$.pipe(
            ofType(StaffCreatedEvent),
            delay(1000),
            map(event => {
                this.logger.log(event, `Inside [StaffSagas] Saga`)
                if (event.data) {
                    this.queue.add(QUEUE_PROCESS_ID.staffRegistered, event.data,
                        { attempts: 3, removeOnComplete: true, delay: 3000 })
                }
                return null;
            })
        )
    }


}