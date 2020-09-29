import { NotFoundException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { DeleteFeesPaidDetailHandler } from ".";
import { DeleteFeesPaidDetailCommand } from "..";
import { FeePaidNewDetailsEntity } from "../../../../entities/EsFeepaidNewDetails";
import { FeesPaidDetailDeletedEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesPaidDetailRepository } from "../../repository";

const mockFunctions = () => ({
    remove: jest.fn(),
    findOne: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('DeleteFeesPaidDetail', () => {
    let eventBus: EventBus;
    let repository: FeesPaidDetailRepository
    let handler: DeleteFeesPaidDetailHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteFeesPaidDetailHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidDetailRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidDetailRepository>(FeesPaidDetailRepository)
        handler = module.get<DeleteFeesPaidDetailHandler>(DeleteFeesPaidDetailHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should delete fees paid detail', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = new FeePaidNewDetailsEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        //@ts-ignore
        repository.remove.mockResolvedValue(entity)
        const result = await handler.execute(new DeleteFeesPaidDetailCommand(cmd.feesPaidDetailId))
        expect(repository.remove).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaidDetailDeletedEvent(entity))
        expect(result.success).toBe(true)
    });

    it('should throw an error if fees is not found', async () => {
        const cmd = FeesMock.getFeesToPay()
        //@ts-ignore
        repository.findOne.mockResolvedValue(null)
        expect(handler.execute(new DeleteFeesPaidDetailCommand(cmd.feesPaidDetailId))).rejects.toThrowError(NotFoundException)
    });


});
