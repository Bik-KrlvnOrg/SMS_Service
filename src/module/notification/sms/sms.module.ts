import { Module } from '@nestjs/common';
import { HubtelSmsService } from './service';

@Module({
    providers: [HubtelSmsService]
})
export class SmsModule { }
