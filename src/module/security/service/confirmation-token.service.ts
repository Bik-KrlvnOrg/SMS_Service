import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ConfirmationTokenRepository} from '../repository';
import {Transactional} from 'typeorm-transactional-cls-hooked';
import {ConfirmationTokenEntity, UserEntity} from '../../../entities';
import {randomBytes} from 'crypto';
import {UrlGeneratorService} from "nestjs-url-generator";

@Injectable()
export class ConfirmationTokenService {
    constructor(
        @InjectRepository(ConfirmationTokenRepository)
        private readonly confirmationRepository: ConfirmationTokenRepository,
        private readonly urlGeneratorService: UrlGeneratorService
    ) {
    }

    @Transactional()
    create(user: UserEntity, ttl: number = 60 * 15 * 1000) {
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + ttl);
        const entity = new ConfirmationTokenEntity();
        entity.token = randomBytes(64).toString('hex');
        entity.user = user;
        entity.expires = expiration;
        entity.link = this.generateConfirmationLink(entity.token)
        return this.confirmationRepository.save(entity);
    }


    async findByToken(token: string): Promise<ConfirmationTokenEntity> {
        return this.confirmationRepository.findOne({token});
    }

    async findByUser(user: UserEntity): Promise<ConfirmationTokenEntity> {
        return this.confirmationRepository.findOne({user});
    }

    generateConfirmationLink(token: string) {
        return this.urlGeneratorService.generateUrlFromPath({
            relativePath: 'users/confirmation',
            query: {
                token
            },
        });
    }
}