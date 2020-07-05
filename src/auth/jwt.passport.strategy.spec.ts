import { Test } from '@nestjs/testing';
import { JwtPassportStrategy } from './jwt.passport.strategy';
import { StudentRepository } from '../student/student.repository';
import { StaffRepository } from '../staff/staff.repository';
import { AdminRepository } from '../admin/admin.repository';
import { AuthType } from './enum/auth.enum';
import { UserEntity, AuthPayload } from './model/auth.model';
import { UnauthorizedException } from '@nestjs/common';

const mockRepository = () => ({
  getStudentWithPayload: jest.fn(),
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

const payload: AuthPayload = {
  id: 1,
  type: AuthType.ADMIN,
  username: 'any_username',
};
describe('JWtPassportStrategy', () => {
  let jwtService: JwtPassportStrategy;
  let studentRepository;
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

  it('should throw not implemented error',async () => {
    const actual = Object.assign({}, payload);
    actual.type = AuthType[''];
    expect(jwtService.validate(actual)).rejects.toThrow(Error);
  });

  it('should get user entity with type student', async () => {
    const studentPayload = Object.assign({}, payload);
    studentPayload.type = AuthType.STUDENT;
    const actual = new UserEntity(studentPayload.id, studentPayload.type);

    studentRepository.getStudentWithPayload.mockResolvedValue(studentData);
    const expected = await jwtService.validate(studentPayload);
    expect(expected).toEqual(actual);
  });

  it('should get user entity with type staff', async () => {
    const staffPayload = Object.assign({}, payload);
    staffPayload.type = AuthType.STAFF;
    const actual = new UserEntity(staffPayload.id, staffPayload.type);

    staffRepository.getStaffWithPayload.mockResolvedValue(staffData);
    const expected = await jwtService.validate(staffPayload);
    expect(expected).toEqual(actual);
  });

  it('should get user entity with type staff', async () => {
    const actual = new UserEntity(payload.id, payload.type);

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
        studentRepository.getStudentWithPayload.mockResolvedValue(null);
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
