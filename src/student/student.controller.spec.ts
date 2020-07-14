import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { AuthGuard } from '@nestjs/passport';
import { StudentService } from './student.service';
import { StudentMocks } from './mock/student.mocks';
import { NotFoundException } from '@nestjs/common';

const mockFunctions = () => ({
  getProfile: jest.fn(),
});
const mockGuard = { canActivate: () => true };

describe('Student Controller', () => {
  let controller: StudentController;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        StudentService,
        { provide: StudentService, useFactory: mockFunctions },
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue(mockGuard)
      .compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  it('should return student profile data', async () => {
    service.getProfile.mockResolvedValue(StudentMocks.profileDto);
    const expected = await controller.getProfile(StudentMocks.payload);
    expect(expected.personal).not.toBeNull();
    expect(expected.parent).not.toBeNull();
  });

  it('should throw an error if profile is not found', () => {
    service.getProfile.mockResolvedValue(null);
    expect(controller.getProfile(StudentMocks.payload)).rejects.toThrow(
      NotFoundException,
    );
  });
});
