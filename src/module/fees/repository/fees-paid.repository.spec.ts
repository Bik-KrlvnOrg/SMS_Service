import { Test } from "@nestjs/testing";
import { FeesPaidRepository } from ".";
import { FeesMock } from "../mock/fees.mock";

describe('FeesPaid Repository', () => {

    let repository: FeesPaidRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [FeesPaidRepository],
        }).compile();

        repository = module.get<FeesPaidRepository>(FeesPaidRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new fees paid', async () => {
        const dto = FeesMock.getFeesPaidDto()
        const entity = FeesMock.getFeesPaidEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createFeePaid(dto)
        expect(expected).toBe(entity)
    })

});