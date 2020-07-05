import { Repository, EntityRepository } from 'typeorm';
import { EsToken } from '../../entities/EsToken';

/**
 * Token repository
 */
@EntityRepository(EsToken)
export class TokenRepository extends Repository<EsToken> {
  /**
   * Creates token
   * @param clientId number
   * @param clientName string
   * @param token string
   * @param expire Date
   * @returns void
   */
  async createToken(
    clientId: number,
    clientName: string,
    token: string,
    expire: Date,
  ): Promise<void> {
    const newToken = new EsToken();

    newToken.clientId = clientId;
    newToken.value = token;
    newToken.clientName = clientName;
    newToken.expiresAt = expire;

    await this.save(newToken);
  }
}
