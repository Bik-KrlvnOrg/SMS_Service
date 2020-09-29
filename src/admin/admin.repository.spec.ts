import { AdminRepository } from './admin.repository';
import { Test } from '@nestjs/testing';
import { CredentialDto, UserEntity } from '../auth/model/auth.model';
import { AuthType } from '../libs';

describe('AdminRepository', () => {
  let repository;

  const credential: CredentialDto = {
    username: 'any_username',
    password: 'any_password',
    type: AuthType.ADMIN,
  };

  const payload: UserEntity = {
    id: 1,
    type: credential.type,
    username: 'any_username',
  };

  const adminData = {
    adminUsername: 'any_username',
    esAdminsid: 1,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [AdminRepository],
    }).compile();

    repository = module.get<AdminRepository>(AdminRepository);
    repository.findOne = jest.fn();
  });

  it('should return admin data with credential', async () => {
    const { username, password } = credential;
    repository.findOne.mockResolvedValue(adminData);
    const expected = await repository.getAdminWithCredential(credential);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: {
        adminUsername: username,
        adminPassword: password,
      },
    });
    expect(expected).toEqual(adminData);
  });

  it('should return admin data with payload', async () => {
    const { username, id } = payload;
    repository.findOne.mockResolvedValue(adminData);
    const expected = await repository.getAdminWithPayload(payload);
    expect(repository.findOne).toHaveBeenCalledWith({
      where: { esAdminsid: id, adminUsername: username },
    });
    expect(expected).toEqual(adminData);
  });
});
