import { async } from 'rxjs/internal/scheduler/async';
import { Test } from '@nestjs/testing';
import { StudentRepository } from './student.repository';
import { CredentialDto, AuthPayload } from '../auth/model/auth.model';
import { AuthType } from '../auth/enum/auth.enum';
import { Not } from 'typeorm';

describe('StudentRepository()', () => {
  let repository;

  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STUDENT,
  };

  const payload: AuthPayload = {
    username: 'any_username',
    id: 1,
    type: AuthType.STUDENT,
  };

  const studentData = {
    preStudentUsername: 'any_username',
    esPreadmissionid: 1,
  };

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
});
