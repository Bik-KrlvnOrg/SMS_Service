import { Test, TestingModule } from '@nestjs/testing';
import { StaffService } from './staff.service';
import { UserEntity } from '../auth/model/auth.model';
import { StaffRepository } from './staff.repository';
import { StaffMocks } from './mock/staff.mock';
import { NotFoundException } from '@nestjs/common';
import { AuthType } from '../libs';

const mockFunctions = () => ({
  getProfile: jest.fn(),
});

describe('StaffService', () => {
  let service: StaffService;
  let repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StaffService,
        { provide: StaffRepository, useFactory: mockFunctions },
      ],
    }).compile();

    service = module.get<StaffService>(StaffService);
    repository = module.get<StaffRepository>(StaffRepository);
  });

  it('should get profile with user entity', async () => {
    const user: UserEntity = {
      id: 1,
      type: AuthType.STAFF,
      username: 'any_username',
    };

    repository.getProfile.mockResolvedValue(StaffMocks.profileDto);
    const expected = await service.getProfile(user);
    expect(expected).toBe(StaffMocks.profileDto)
  });

  it('should throw an error if no profile is found', async () => {
  
    repository.getProfile.mockResolvedValue(null);
    expect(service.getProfile(StaffMocks.payload)).rejects.toThrow(new NotFoundException("profile not found"))
  });
});
