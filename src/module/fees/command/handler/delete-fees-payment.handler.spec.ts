import { NotFoundException } from "@nestjs/common";
import { EventBus } from "@nestjs/cqrs";
import { Test, TestingModule } from "@nestjs/testing";
import { DeleteFeesPaymentHandler } from ".";
import { DeleteFeesPaymentCommand } from "..";
import { FeePaidNewEntity } from "../../../../entities/EsFeepaidNew";
import { FeesPaymentDeletedEvent } from "../../event";
import { FeesMock } from "../../mock/fees.mock";
import { FeesPaidNewRepository } from "../../repository";

const mockFunctions = () => ({
    findOne: jest.fn(),
    remove: jest.fn(),
    publish: jest.fn(() => {/* no nothing */ })
});

describe('DeleteFeesPaymentHandler', () => {
    let eventBus: EventBus;
    let repository: FeesPaidNewRepository
    let handler: DeleteFeesPaymentHandler

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteFeesPaymentHandler,
                { provide: EventBus, useFactory: mockFunctions },
                { provide: FeesPaidNewRepository, useFactory: mockFunctions },
            ],
        }).compile();
        eventBus = module.get<EventBus>(EventBus)
        repository = module.get<FeesPaidNewRepository>(FeesPaidNewRepository)
        handler = module.get<DeleteFeesPaymentHandler>(DeleteFeesPaymentHandler)
    });

    it('should be defined', () => {
        expect(eventBus).toBeDefined()
        expect(repository).toBeDefined()
        expect(handler).toBeDefined()
    })

    it('should delete fee payment', async () => {
        const cmd = FeesMock.getFeesToPay()
        const entity = new FeePaidNewEntity()
        //@ts-ignore
        repository.findOne.mockResolvedValue(entity)
        //@ts-ignore
        repository.remove.mockResolvedValue(entity)
        const result = await handler.execute(new DeleteFeesPaymentCommand(cmd.feesId))
        expect(repository.findOne).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledTimes(1)
        expect(eventBus.publish).toHaveBeenCalledWith(new FeesPaymentDeletedEvent(entity))
        expect(result.success).toBe(true)

    });

    it('should throw an error if fees not found', async () => {
        const cmd = FeesMock.getFeesToPay()

        //@ts-ignore
        repository.findOne.mockResolvedValue(null)
        expect(handler.execute(new DeleteFeesPaymentCommand(cmd.feesId))).rejects.toThrowError(NotFoundException)
    });



});
