import { Test } from '@nestjs/testing';
import { StaffRepository } from './staff.repository';
import { CredentialDto, UserEntity } from '../auth/model/auth.model';
import { AuthType } from '../auth/enum/auth.enum';

describe('StaffRepository', () => {
  let repository;
  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STAFF,
  };

  const payload: UserEntity = {
    username: 'any_username',
    id: 1,
    type: AuthType.STAFF,
  };

  const staffData = {
    stUsername: 'any_username',
    esStaffid: 1,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [StaffRepository],
    }).compile();

    repository =  module.get<StaffRepository>(StaffRepository);
    repository.findOne = jest.fn();
  });

  it('should return staff data with credential', async () => {
    const { username, password } = credential;
    repository.findOne.mockResolvedValue(staffData);
    const expected = await repository.getStaffWithCredential(credential);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        stUsername: username,
        stPassword: password,
        status: 'added',
        selstatus: 'accepted',
        tcstatus: 'notissued',
      },
    });
    expect(expected).toEqual(staffData);
  });

  it('should return staff data with payload', async () => {
    const { id, username } = payload;
    repository.findOne.mockResolvedValue(staffData);
    const expected = await repository.getStaffWithPayload(payload);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        esStaffid: id,
        stUsername: username,
        status: 'added',
        selstatus: 'accepted',
        tcstatus: 'notissued',
      },
    });
    expect(expected).toEqual(staffData);
  });
});
