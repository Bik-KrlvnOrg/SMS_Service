import { NotFoundException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { DeleteFeesPaidHandler } from ".";
import { DeleteFeesPaidCommand } from "..";
import { FeesPaidEntity } from "../../../../entities/EsFeepaid";
import { FeesPaidDeletedEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesPaidRepository } from "../../repository";

const mockFunctions = () => ({
    findOne: jest.fn(),
    remove: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('DeleteFeesPaidHandler', () => {
    let eventBus: EventBus;
    let repository: FeesPaidRepository
    let handler: DeleteFeesPaidHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteFeesPaidHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidRepository>(FeesPaidRepository)
        handler = module.get<DeleteFeesPaidHandler>(DeleteFeesPaidHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should delete fees paid', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = new FeesPaidEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        //@ts-ignore
        repository.remove.mockResolvedValue(entity)
        const result = await handler.execute(new DeleteFeesPaidCommand(cmd.feesPaidId))
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaidDeletedEvent(entity))
        expect(result.success).toBe(true)

    });

    it('should throw an error if fees not found', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = new FeesPaidEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(null)
        expect(handler.execute(new DeleteFeesPaidCommand(cmd.feesPaidId))).rejects.toThrowError(NotFoundException)

    });


});
