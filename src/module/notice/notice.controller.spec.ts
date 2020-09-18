import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NoticeMock } from './mock/notice.mock';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';

const mockFunctions = () => ({
  getNotice: jest.fn(),
});

describe('Notice Controller', () => {
  let controller: NoticeController;
  let service

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticeController],
      providers: [NoticeService, { provide: NoticeService, useFactory: mockFunctions }]
    }).compile();

    controller = module.get<NoticeController>(NoticeController);
    service = module.get<NoticeService>(NoticeService)
  });

  it('should throw an error if id not found', async () => {
    const id = 202
    service.getNotice.mockResolvedValue(Promise.reject(new NotFoundException('notice not found')))
    expect(controller.getNotice(id)).rejects.toThrow(new NotFoundException('notice not found'))
  });

  it('should get notice response', async () => {
    const id = 202
    const notice = NoticeMock.getNoticeEntity()
    service.getNotice.mockResolvedValue(Promise.resolve(notice))
    const expected = await controller.getNotice(id)
    expect(expected.data.notice).toBe(notice)
  });

  
});
