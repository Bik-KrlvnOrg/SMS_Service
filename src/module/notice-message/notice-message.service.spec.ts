import { Test, TestingModule } from '@nestjs/testing';
import { NoticeMessageMock } from './mock/notice-message.mock';
import { NoticeMessageService } from './notice-message.service';
import { NoticeMessageRepository } from './repository/notice-message.repository';

const mockFunction = () => ({
  find: jest.fn(),
  create: jest.fn(),
  createMessage: jest.fn(),
  save: jest.fn()
})

describe('NoticeMessageService', () => {
  let service: NoticeMessageService;
  let repository
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticeMessageService, { provide: NoticeMessageRepository, useFactory: mockFunction }],
    }).compile();

    service = module.get<NoticeMessageService>(NoticeMessageService);
    repository = module.get<NoticeMessageRepository>(NoticeMessageRepository);
  });

  it('should create new notice message', async () => {
    const dto = NoticeMessageMock.getNoticeMessageDto()
    const entity = NoticeMessageMock.getNoticeMessageEntity()
    repository.createMessage.mockResolvedValue(entity)
    const expected = await service.createMessage(dto)
    expect(expected).toBe(entity)
  });

  it('should get all active notice messages', async () => {
    const dto = NoticeMessageMock.getNoticeQueryDto()
    const entities = [NoticeMessageMock.getNoticeMessageEntity()]
    repository.find.mockResolvedValue(entities)
    const expected = await service.getMessages(dto)
    expect(repository.find).toHaveBeenCalledWith({...dto})
    expect(expected).toBe(entities)
  });


});
