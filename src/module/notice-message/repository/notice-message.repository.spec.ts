import { InternalServerErrorException } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { NoticeMessageMock } from "../mock/notice-message.mock";
import { NoticeMessageRepository } from "./notice-message.repository";

describe('NoticeMessage Repository', () => {

  let repository: NoticeMessageRepository
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [NoticeMessageRepository],
    }).compile();

    repository = module.get<NoticeMessageRepository>(NoticeMessageRepository);
    repository.save = jest.fn();
    repository.create = jest.fn();
  });

  it('should create new notice message', async () => {
    const dto = NoticeMessageMock.getNoticeMessageDto()
    const entity = NoticeMessageMock.getNoticeMessageEntity()
    // @ts-ignore
    repository.create.mockResolvedValue(entity)
    // @ts-ignore
    repository.save.mockResolvedValue(entity)
    const expected = await repository.createMessage(dto)
    expect(expected).toBe(entity)
  })

  it('should throw an error if save fails', async () => {
    const dto = NoticeMessageMock.getNoticeMessageDto()
    const entity = NoticeMessageMock.getNoticeMessageEntity()
    // @ts-ignore
    repository.create.mockResolvedValue(entity)
    // @ts-ignore
    repository.save.mockRejectedValue(new Error('something went wrong'))
    await expect(repository.createMessage(dto)).rejects.toThrow('something went wrong')
  })

});