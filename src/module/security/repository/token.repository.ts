import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { TokenEntity } from '../../../entities';
import { EntityRepository } from 'typeorm';

@EntityRepository(TokenEntity)
export class TokenRepository extends BaseRepository<TokenEntity> {
}