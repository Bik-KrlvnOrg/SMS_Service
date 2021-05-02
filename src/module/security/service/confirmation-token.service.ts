import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfirmationTokenRepository } from '../repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { UserEntity } from '../../../entities';
import { ConfirmationTokenEntity } from '../../../entities';
import { randomBytes } from 'crypto';

@Injectable()
export class ConfirmationTokenService {
  constructor(
    @InjectRepository(ConfirmationTokenRepository)
    private readonly confirmationRepository: ConfirmationTokenRepository) {
  }

  @Transactional()
  create(user: UserEntity, ttl: number = 60 * 15 * 1000) {
    const expiration = new Date();
    expiration.setTime(expiration.getTime() + ttl);
    const entity = new ConfirmationTokenEntity();
    entity.token = randomBytes(64).toString('hex');
    entity.user = user;
    entity.expires = expiration;
    return this.confirmationRepository.save(entity);
  }


  async findByToken(token: string): Promise<ConfirmationTokenEntity> {
    return this.confirmationRepository.findOne({ token });
  }
}