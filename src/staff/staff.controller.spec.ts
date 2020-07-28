import { Test, TestingModule } from '@nestjs/testing';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { StaffMocks } from './mock/staff.mock';

const mockFunctions = () => ({
  getProfile: jest.fn(),
});
describe('Staff Controller', () => {
  let controller: StaffController;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffController],
      providers: [
        StaffService,
        { provide: StaffService, useFactory: mockFunctions },
      ],
    }).compile();

    controller = module.get<StaffController>(StaffController);
    service = module.get<StaffService>(StaffService);
  });

  it('should return profile response', async () => {
    service.getProfile.mockResolvedValue(StaffMocks.profileDto);
    const expected = await controller.getProfile(StaffMocks.payload);
    expect(expected.profile).not.toBeNull();
  });
});
