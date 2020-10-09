import { Module } from '@nestjs/common';
import { SmsModule } from './sms/sms.module';
import { EmailModule } from './email/email.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [SmsModule, EmailModule, FirebaseModule]
})
export class NotificationModule {}
