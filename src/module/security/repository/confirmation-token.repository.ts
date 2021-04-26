import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ConfirmationTokenEntity } from '../../../entities/confirmation-token.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(ConfirmationTokenEntity)
export class ConfirmationTokenRepository extends BaseRepository<ConfirmationTokenEntity> {

}