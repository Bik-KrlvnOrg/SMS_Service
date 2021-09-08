import {Module} from '@nestjs/common';
import {MAIL_PROVIDER} from "./interface/mail.service";
import {NodeMailerService} from "./nodemailer/node-mailer.service";

@Module({
    imports: [],
    providers: [
        {
            provide: MAIL_PROVIDER,
            useClass: NodeMailerService
        }
    ],
    exports: [MAIL_PROVIDER]
})
export class NotificationModule {
}
