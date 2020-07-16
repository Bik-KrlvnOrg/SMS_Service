import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { AuthGuard } from '@nestjs/passport';
import { StudentService } from './student.service';
import { StudentMocks } from './mock/student.mocks';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import * as httpMock from 'node-mocks-http';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { UserEntity } from '../auth/model/auth.model';

const mockFunctions = () => ({
  getProfile: jest.fn(),
});
const mockGuard = { canActivate: () => true };

const getDecoratorFactory = (decorator: Function) => {
  class TestDecorator {
    test(@GetUser() user: UserEntity) {}
  }
  const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, TestDecorator, 'test');
  return args[Object.keys(args)[0]].factory;
};

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
    expect(expected.profile.parent).not.toBeNull();
    expect(expected.profile.personal).not.toBeNull();
  });

  describe('user decorator', () => {
    it('get user entity from decorator', async () => {
      const req = httpMock.createRequest();
      const res = httpMock.createResponse();
      const mockUser = StudentMocks.payload;
      req.user = mockUser;
      const ctx = new ExecutionContextHost(
        [req, res],
        StudentController,
        controller.getProfile,
      );
      const factory = getDecoratorFactory(UserEntity);
      const user = factory(null, ctx);
      expect(user).toEqual(mockUser);
    });
  });
});
