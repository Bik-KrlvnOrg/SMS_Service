import { Module } from '@nestjs/common';
import { SmsModule } from './sms/sms.module';
import { EmailModule } from './email/email.module';
import { FirebaseModule } from './firebase/firebase.module';
import { NotificationService } from './notification.service';
import { BullConfigService, PROVIDERS, QUEUE_PROCESSOR } from '../../libs';
import { HubtelSmsService } from './sms/service';
import { StaffProcess } from './queue';
import { BullModule } from '@nestjs/bull';

const QueueProcessors = [StaffProcess]
@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: QUEUE_PROCESSOR.NOTIFICATION,
      useClass: BullConfigService
    }),
    SmsModule,
    EmailModule,
    FirebaseModule],
  providers: [NotificationService, {
    provide: PROVIDERS.HUBTEL_SERVICE,
    useClass: HubtelSmsService
  }, ...QueueProcessors],
  exports: [PROVIDERS.HUBTEL_SERVICE, BullModule]
})
export class NotificationModule { }
