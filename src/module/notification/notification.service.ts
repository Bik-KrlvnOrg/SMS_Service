import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from '../../libs';
import { INotificationService, ISmsService } from './interface';

@Injectable()
export class NotificationService implements INotificationService {
    constructor(@Inject(PROVIDERS.HUBTEL_SERVICE) private readonly smsService: ISmsService<any>) { }

    sendEmail(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async sendSms(body: Record<string, any>): Promise<void> {
        return this.smsService.sendMessage(body)
    }

    sendPush(): Promise<void> {
        throw new Error('Method not implemented.');
    }


}
