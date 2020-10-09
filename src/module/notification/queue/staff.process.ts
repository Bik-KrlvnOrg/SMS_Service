import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";
import { StaffEntity } from "../../../entities/EsStaff";
import { QUEUE_PROCESSOR, QUEUE_PROCESS_ID } from "../../../libs";
import { NotificationService } from "../notification.service";

@Processor(QUEUE_PROCESSOR.NOTIFICATION)
export class StaffProcess {
    logger = new Logger(this.constructor.name)
    constructor(private readonly notificationService: NotificationService) { }

    @Process(QUEUE_PROCESS_ID.staffRegistered)
    async processStaffRegistration(job: Job<StaffEntity>): Promise<void> {
        if (job.data === null) return
        return this.notificationService.sendSms(job.data)
    }

    @OnQueueActive()
    async onActive(job: Job) {
        this.logger.log(`Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(job.data)}...`,)
    }

    @OnQueueCompleted()
    async onCompleted(job: Job) {
        this.logger.log(
            `Completed job ${job.id} of type ${job.name} with result ${job.returnvalue}`,
        );
        await job.remove();
    }

}