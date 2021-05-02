import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ConfirmationTokenEntity } from '../../../entities';
import { EntityRepository } from 'typeorm';

@EntityRepository(ConfirmationTokenEntity)
export class ConfirmationTokenRepository extends BaseRepository<ConfirmationTokenEntity> {

}