import { Test } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { CredentialDto, AuthPayload } from '../auth/model/auth.model';
import { Not } from 'typeorm';
import { StudentMocks } from './mock/student.mocks';

describe('StudentRepository()', () => {
  let repository;

  const credential: CredentialDto = StudentMocks.credential;

  const payload: AuthPayload = StudentMocks.payload;

  const studentData = StudentMocks.studentData;
  const profileData = StudentMocks.profileData;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [StudentRepository],
    }).compile();

    repository = module.get<StudentRepository>(StudentRepository);
    repository.findOne = jest.fn();
  });

  it('should return student data with credential', async () => {
    const { username, password } = credential;
    repository.findOne.mockResolvedValue(studentData);

    const expected = await repository.getStudentWithCredential(credential);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        preStudentUsername: username,
        preStudentPassword: password,
        status: Not('inactive'),
      },
    });
    expect(expected).toEqual(studentData);
  });

  it('should return student data with payload', async () => {
    const { id, username } = payload;
    repository.findOne.mockResolvedValue(studentData);
    const expected = await repository.getStudentWithPayload(payload);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        esPreadmissionid: id,
        preStudentUsername: username,
        status: Not('inactive'),
      },
    });
    expect(expected).toEqual(studentData);
  });

  describe('Get student profile', () => {
    it('should return profile with payload', async () => {
      repository.findOne.mockResolvedValue(profileData);
      const expected = await repository.getProfile(payload)
      expect(expected.personal).not.toBeNull()
      expect(expected.parent).not.toBeNull()
    });
  });
});
