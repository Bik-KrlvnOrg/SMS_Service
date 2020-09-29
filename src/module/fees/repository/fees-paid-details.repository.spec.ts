import { Test } from "@nestjs/testing";
import { FeesPaidDetailRepository } from ".";
import { FeesMock } from "../mock/fees.mock";

describe('FeesPaidDetail Repository', () => {

    let repository:FeesPaidDetailRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [FeesPaidDetailRepository],
        }).compile();

        repository = module.get<FeesPaidDetailRepository>(FeesPaidDetailRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new fees detail', async () => {
        const dto = FeesMock.getFeesPaidDetailDto()
        const entity = FeesMock.getFeesPaidDetailEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createFeesPaidNewDetail(dto)
        expect(expected).toBe(entity)
    })

});