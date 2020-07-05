import { Test } from '@nestjs/testing';
import { TokenRepository } from './token.repository';

describe('TokenRepository', () => {
  let repository: TokenRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TokenRepository],
    }).compile();
    repository = module.get<TokenRepository>(TokenRepository);
    repository.save = jest.fn();
  });

  it('should save new token', async () => {
    const clientId = 1;
    const clientName = 'any_client_name';
    const token = 'any_token';
    const expiresIn = new Date();
    await repository.createToken(clientId, clientName, token, expiresIn);
    expect(repository.save).toHaveBeenCalled()
  });
});
