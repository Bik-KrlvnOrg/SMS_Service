import { ICommandHandler, CommandHandler, EventBus } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeesMasterRepository, FeesPaidNewRepository, FeesPaidRepository } from "../../repository";
import { CreateFeesPaidCommand } from "../impl";
import { FeesPaidCreatedEvent, FeesPaidCreatedFailsEvent } from "../../event";
import { FeesPaidDto } from "../../dto";

@CommandHandler(CreateFeesPaidCommand)
export class CreateFeesPaidHandler implements ICommandHandler<CreateFeesPaidCommand> {
    logger = new Logger(this.constructor.name)

    constructor(
        @InjectRepository(FeesPaidRepository)
        private readonly paidRepository: FeesPaidRepository,

        @InjectRepository(FeesPaidNewRepository)
        private readonly paidNewRepository: FeesPaidNewRepository,

        @InjectRepository(FeesMasterRepository)
        private readonly feesMasterRepository: FeesMasterRepository,
        private readonly event$: EventBus
    ) { }

    async execute(command: CreateFeesPaidCommand): Promise<any> {
        try {
            this.logger.log(`async ${this.constructor.name}...`, command.constructor.name);
            const { cmd } = command;
            const { studentId, financeMasterId, classId } = cmd
            const installment = await this.getInstallmentCount({ studentId, financeMasterId })
            const feeMaster = await this.getFeeMaster({
                classId,
                fromDate: new Date(cmd.fromfinanceDate),
                toDate: new Date(cmd.tofinanceDate)
            })

            const dto: FeesPaidDto = {
                classId,
                feeAmount: cmd.amountPaid,
                installment,
                fromDate: new Date(cmd.fromfinanceDate),
                toDate: new Date(cmd.tofinanceDate),
                voucherEntryId: cmd.voucherEntryId,
                particularId: feeMaster.id,
                particulartName: feeMaster.particular,
                studentId
            }
            const result = await this.paidRepository.createFeePaid(dto)
            cmd.particularName = feeMaster.particular
            cmd.installment = installment
            cmd.feesPaidId = result.id
            this.event$.publish(new FeesPaidCreatedEvent(result, { req: cmd }))
            return { success: true }
        } catch (err) {
            const cmd = command.cmd
            this.event$.publish(new FeesPaidCreatedFailsEvent(cmd))
            this.logger.log(err)
        }
    }

    private async getInstallmentCount(cmd: { studentId: number, financeMasterId: number }) {
        return await this.paidNewRepository.count({
            where: {
                studentId: cmd.studentId, financeMasterId: cmd.financeMasterId
            }
        })
    }

    private async getFeeMaster(cmd: { classId: number, fromDate: Date, toDate: Date }) {
        return await this.feesMasterRepository.findOne({
            where: { classId: cmd.classId, fromDate: cmd.fromDate, toDate: cmd.toDate }
        })
    }
}
