import { Test } from "@nestjs/testing";
import { FeesPaidNewRepository } from ".";
import { FeesMock } from "../mock/fees.mock";

describe('FeesPaidNew Repository', () => {

    let repository:FeesPaidNewRepository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [FeesPaidNewRepository],
        }).compile();

        repository = module.get<FeesPaidNewRepository>(FeesPaidNewRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new fees paid new', async () => {
        const dto = FeesMock.getFeesPaidNewDto()
        const entity = FeesMock.getFeesPaidNewEntity()
        //@ts-ignore
        repository.create.mockResolvedValue(entity)
        //@ts-ignore
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createFeePaidNew(dto)
        expect(expected).toBe(entity)
    })

});