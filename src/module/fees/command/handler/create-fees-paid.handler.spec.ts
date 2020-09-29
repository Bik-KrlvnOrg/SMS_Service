import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateFeesPaidHandler } from ".";
import { FeesMasterEntity } from "../../../../entities/EsFeemaster";
import { FeesPaidCreatedEvent, FeesPaidCreatedFailsEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesMasterRepository, FeesPaidNewRepository, FeesPaidRepository } from "../../repository";
import { CreateFeesPaidCommand } from "../impl";

const mockFunctions = () => ({
    findOne: jest.fn(),
    createFeePaid: jest.fn(),
    count: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('CreateFeesPaidHandler', () => {
    let eventBus: EventBus;
    let repository: FeesPaidRepository
    let paidNewRepository: FeesPaidNewRepository
    let masterRepository: FeesMasterRepository
    let handler: CreateFeesPaidHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFeesPaidHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidRepository, useFactory: mockFunctions },
                { provide: FeesPaidNewRepository, useFactory: mockFunctions },
                { provide: FeesMasterRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidRepository>(FeesPaidRepository)
        paidNewRepository = module.get<FeesPaidNewRepository>(FeesPaidNewRepository)
        masterRepository = module.get<FeesMasterRepository>(FeesMasterRepository)
        handler = module.get<CreateFeesPaidHandler>(CreateFeesPaidHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(paidNewRepository).toBeDefined()
        expect(masterRepository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should create fees paid ', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidEntity()
        //@ts-ignore
        repository.createFeePaid.mockResolvedValue(entity)
        //@ts-ignore
        masterRepository.findOne.mockResolvedValue(new FeesMasterEntity())
        //@ts-ignore
        paidNewRepository.count.mockResolvedValue(1)

        const result = await handler.execute(new CreateFeesPaidCommand(cmd))
        expect(repository.createFeePaid).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(result.success).toBe(true)

    });

    it('should publish failed event on create fees paid command ', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = FeesMock.getFeesPaidEntity()
        //@ts-ignore
        repository.createFeePaid.mockResolvedValue(entity)
        //@ts-ignore
        masterRepository.findOne.mockRejectedValue(new Error('an error occurred'))
        //@ts-ignore
        paidNewRepository.count.mockResolvedValue(1)

        const result = await handler.execute(new CreateFeesPaidCommand(cmd))
        expect(repository.createFeePaid).toHaveBeenCalledTimes(0)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).not.toHaveBeenCalledWith(new FeesPaidCreatedEvent(entity, { req: cmd }))
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaidCreatedFailsEvent(cmd))
        expect(result).toBe(undefined)

    });

});
