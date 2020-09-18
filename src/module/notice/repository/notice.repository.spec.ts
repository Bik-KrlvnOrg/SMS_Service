import { Test } from "@nestjs/testing";
import { NoticeMock } from "../mock/notice.mock";
import { NoticeRepository } from "./notice.repository";

describe('Notice Repository', () => {

    let repository
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [NoticeRepository],
        }).compile();

        repository = module.get<NoticeRepository>(NoticeRepository);
        repository.save = jest.fn();
        repository.create = jest.fn();
    });

    it('should create new notice', async () => {
        const dto = NoticeMock.getNoticeDto()
        const entity = NoticeMock.getNoticeEntity()
        repository.create.mockResolvedValue(entity)
        repository.save.mockResolvedValue(entity)
        const expected = await repository.createNotice(dto)
        expect(expected).toBe(entity)
    })

});