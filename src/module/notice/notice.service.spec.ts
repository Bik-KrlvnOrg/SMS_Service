import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NoticeMock } from './mock/notice.mock';
import { NoticeService } from './notice.service';
import { NoticeRepository } from './repository/notice.repository';

const mockRepository = () => ({
  findOne: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  createNotice:jest.fn()
})

describe('NoticeService', () => {
  let service: NoticeService;
  let repository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticeService, { provide: NoticeRepository, useFactory: mockRepository }],
    }).compile();

    service = module.get<NoticeService>(NoticeService);
    repository = module.get<NoticeRepository>(NoticeRepository)
  });

  it('should throw an error if id is not found', async () => {
    const id = 100
    repository.findOne.mockResolvedValue(null)
    expect(service.getNotice(id)).rejects.toThrow(new NotFoundException('notice not found'))
  });

  it('should update notice with dto data', async () => {
    const dto = NoticeMock.getNoticeDto()
    dto.message = 'updated message'
    const entity = NoticeMock.getNoticeEntity()
    repository.findOne.mockResolvedValue(entity)
    repository.create.mockResolvedValue(dto)
    repository.save.mockResolvedValue(dto)
    const expected = await service.updateNotice(dto)
    expect(expected).not.toBe(entity)

  });

  it('should create new notice', async () => {
    const dto = NoticeMock.getNoticeDto()
    dto.id = 0
    const entity = NoticeMock.getNoticeEntity()
    repository.create.mockResolvedValue(dto)
    repository.createNotice.mockResolvedValue(entity)
    const expected = await service.addNotice(dto)
    expect(expected.id).not.toBe(dto.id)

  });

  it('should throw an error if id for update is invalid', async () => {
    const dto = NoticeMock.getNoticeDto()
    dto.message = 'updated message'
    repository.findOne.mockResolvedValue(null)
    expect(service.updateNotice(dto)).rejects.toThrow(new NotFoundException('notice not found'))

  });
 
  it('should throw an error if id for delete is invalid', async () => {
    const id = 100
    repository.findOne.mockResolvedValue(null)
    expect(service.removeNotice(id)).rejects.toThrow(new NotFoundException('notice not found'))

  });


  it('should get notice with id', async () => {
    const id = 1
    const entity = NoticeMock.getNoticeEntity()
    repository.findOne.mockResolvedValue(entity)
    const expected = await service.getNotice(id)
    expect(expected).not.toBeNull()
    expect(expected.id).toBe(id)

  });

  it('should get all notice', async () => {
    const notices = [NoticeMock.getNoticeEntity()]
    repository.find.mockResolvedValue(notices)
    const expected = await service.getNotices()

    expect(expected[0].message).not.toBeNull()
    expect(expected).toBe(notices)
  });

  it('should remove notice with id', async () => {
    const id = 1
    const entity = NoticeMock.getNoticeEntity()
    repository.findOne.mockResolvedValue(entity)
    repository.remove.mockResolvedValue(entity)
    const expected = await service.removeNotice(id)
    expect(expected.id).toBe(entity.id)
  });



});
