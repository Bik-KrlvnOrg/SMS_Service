import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { TokenEntity } from '../../../entities/token.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(TokenEntity)
export class TokenRepository extends BaseRepository<TokenEntity> {
}