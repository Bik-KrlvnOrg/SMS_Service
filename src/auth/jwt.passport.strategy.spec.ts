import { Test } from '@nestjs/testing';
import { JwtPassportStrategy } from './jwt.passport.strategy';
import { StaffRepository } from '../staff/staff.repository';
import { AdminRepository } from '../admin/admin.repository';
import { UserEntity } from './model/auth.model';
import { UnauthorizedException } from '@nestjs/common';
import { AuthType } from '../libs';
import { StudentRepository } from '../module/student/repository';

const mockRepository = () => ({
  getStudentById: jest.fn(),
  getStaffWithPayload: jest.fn(),
  getAdminWithPayload: jest.fn(),
});

const studentData = {
  preStudentUsername: 'any_username',
  esPreadmissionid: 1,
};

const staffData = {
  stUsername: 'any_username',
  esStaffid: 1,
};

const adminData = {
  adminUsername: 'any_username',
  esAdminsid: 1,
};

const payload: UserEntity = {
  id: 1,
  type: AuthType.ADMIN,
  username: 'any_username',
  school: 0,
};
describe('JWtPassportStrategy', () => {
  let jwtService: JwtPassportStrategy;
  let studentRepository:StudentRepository;
  let staffRepository;
  let adminRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        JwtPassportStrategy,
        { provide: StudentRepository, useFactory: mockRepository },
        { provide: StaffRepository, useFactory: mockRepository },
        { provide: AdminRepository, useFactory: mockRepository },
      ],
    }).compile();

    jwtService = module.get<JwtPassportStrategy>(JwtPassportStrategy);
    studentRepository = module.get<StudentRepository>(StudentRepository);
    staffRepository = module.get<StaffRepository>(StaffRepository);
    adminRepository = module.get<AdminRepository>(AdminRepository);
  });

  it('should throw not implemented error', async () => {
    const actual = Object.assign({}, payload);
    actual.type = AuthType[''];
    expect(jwtService.validate(actual)).rejects.toThrow(Error);
  });

  it('should get user entity with type student', async () => {
    const studentPayload = Object.assign({}, payload);
    studentPayload.type = AuthType.STUDENT;
    const actual: UserEntity = studentPayload;

    //@ts-ignore
    studentRepository.getStudentById.mockResolvedValue(studentData);
    const expected = await jwtService.validate(studentPayload);
    expect(expected).toEqual(actual);
  });

  it('should get user entity with type staff', async () => {
    const staffPayload = Object.assign({}, payload);
    staffPayload.type = AuthType.STAFF;
    const actual: UserEntity = staffPayload;

    staffRepository.getStaffWithPayload.mockResolvedValue(staffData);
    const expected = await jwtService.validate(staffPayload);
    expect(expected).toEqual(actual);
  });

  it('should get user entity with type admin', async () => {
    const actual: UserEntity = payload;

    adminRepository.getAdminWithPayload.mockResolvedValue(adminData);
    const expected = await jwtService.validate(payload);
    expect(expected).toEqual(actual);
  });

  describe('Unauthorize', () => {
    it('should throw an error if admin is not found', async () => {
      adminRepository.getAdminWithPayload.mockResolvedValue(null);
      expect(jwtService.validate(payload)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw an error if student is not found', async () => {
      const studentPayload = Object.assign({}, payload);
      studentPayload.type = AuthType.STUDENT;
      //@ts-ignore
      studentRepository.getStudentById.mockResolvedValue(null);
      expect(jwtService.validate(studentPayload)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw an error if staff is not found', async () => {
      const staffPayload = Object.assign({}, payload);
      staffPayload.type = AuthType.STAFF;
      staffRepository.getStaffWithPayload.mockResolvedValue(null);
      expect(jwtService.validate(staffPayload)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
});
