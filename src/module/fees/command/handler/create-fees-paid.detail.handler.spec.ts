import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateFeesPaidDetailHandler } from ".";
import { FeesPaidDetailCreatedEvent, FeesPaidDetailCreatedFailedEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesPaidDetailRepository } from "../../repository";
import { CreateFeesPaidDetailCommand } from "../impl";

const mockFunctions = () => ({
    createFeesPaidNewDetail: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('CreateFeesPaidDetailHandler', () => {
    let eventBus: EventBus;
    let repository: FeesPaidDetailRepository
    let handler: CreateFeesPaidDetailHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFeesPaidDetailHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidDetailRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidDetailRepository>(FeesPaidDetailRepository)
        handler = module.get<CreateFeesPaidDetailHandler>(CreateFeesPaidDetailHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create fees paid detail', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidDetailEntity()
        //@ts-ignore
        repository.createFeesPaidNewDetail.mockResolvedValue(entity)
        const result = await handler.execute(new CreateFeesPaidDetailCommand(cmd))
        expect(repository.createFeesPaidNewDetail).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaidDetailCreatedEvent(entity, { req: cmd }))
        expect(result.success).toBe(true)

    });

    it('should publish failed event if command fees detail fails', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidDetailEntity()
        //@ts-ignore
        repository.createFeesPaidNewDetail.mockRejectedValue('an error occurred')
        const result = await handler.execute(new CreateFeesPaidDetailCommand(cmd))
        expect(result).toBe(undefined)
        expect(repository.createFeesPaidNewDetail).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).not.toHaveBeenCalledWith(new FeesPaidDetailCreatedEvent(entity, { req: cmd }))

        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaidDetailCreatedFailedEvent(cmd))
    });


});
