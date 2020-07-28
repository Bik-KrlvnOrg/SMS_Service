import { Test } from '@nestjs/testing';
import { StaffRepository } from './staff.repository';
import { CredentialDto } from '../auth/model/auth.model';
import { AuthType } from '../auth/enum/auth.enum';
import { StaffMocks } from './mock/staff.mock';

describe('StaffRepository', () => {
  let repository;
  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.STAFF,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [StaffRepository],
    }).compile();

    repository = module.get<StaffRepository>(StaffRepository);
    repository.findOne = jest.fn();
  });

  it('should return staff data with credential', async () => {
    const { username, password } = credential;
    repository.findOne.mockResolvedValue(StaffMocks.staffData);
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
    expect(expected).toEqual(StaffMocks.staffData);
  });

  it('should return staff data with payload', async () => {
    const { id, username } = StaffMocks.payload;
    repository.findOne.mockResolvedValue(StaffMocks.staffData);
    const expected = await repository.getStaffWithPayload(StaffMocks.payload);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        esStaffid: id,
        stUsername: username,
        status: 'added',
        selstatus: 'accepted',
        tcstatus: 'notissued',
      },
    });
    expect(expected).toEqual(StaffMocks.staffData);
  });

  it('should return staff profile', async () => {
    repository.findOne.mockResolvedValue(StaffMocks.staffData);
    const expected = await repository.getProfile(StaffMocks.payload);
    expect(expected.stUsername).not.toBeNull();
  });
});
