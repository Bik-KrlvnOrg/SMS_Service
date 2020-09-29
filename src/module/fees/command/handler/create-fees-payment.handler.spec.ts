import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateFeesPaymentHandler } from ".";
import { FeesPaymentCreatedEvent, FeesPaymentCreatedFailedEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesPaidNewRepository } from "../../repository";
import { CreateFeesPaymentCommand } from "../impl";

const mockFunctions = () => ({
    createFeePaidNew: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('FeesPayHandler', () => {
    let eventBus: EventBus;
    let repository: FeesPaidNewRepository
    let handler: CreateFeesPaymentHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFeesPaymentHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidNewRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidNewRepository>(FeesPaidNewRepository)
        handler = module.get<CreateFeesPaymentHandler>(CreateFeesPaymentHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create fee payment new', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidNewEntity()
        //@ts-ignore
        repository.createFeePaidNew.mockResolvedValue(entity)
        const result = await handler.execute(new CreateFeesPaymentCommand(cmd))
        expect(repository.createFeePaidNew).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaymentCreatedEvent(entity, { req: cmd }))
        expect(result.success).toBe(true)

    });

    it('should publish fail event on createFees command', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidNewEntity()
        //@ts-ignore
        repository.createFeePaidNew.mockRejectedValue(new Error('an error occurred'))
        const result = await handler.execute(new CreateFeesPaymentCommand(cmd))
        expect(repository.createFeePaidNew).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).not.toHaveBeenCalledWith(new FeesPaymentCreatedEvent(entity, { req: cmd }))
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaymentCreatedFailedEvent(cmd.voucherEntryId))
        expect(result).toBe(undefined)

    });


});
