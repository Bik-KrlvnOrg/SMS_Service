import {ConfigService} from "@nestjs/config";
import {Injectable} from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import {createTransport} from "nodemailer";
import {MailerConfig, MailService} from "../interface/mail.service";


@Injectable()
export class NodeMailerService implements MailService {
    private nodemailerTransport: Mail;

    constructor(private readonly configService: ConfigService) {
        const mailerConfig = configService.get<MailerConfig>('mailer');
        this.nodemailerTransport = createTransport(mailerConfig);
    }

    async sendMail(options: Mail.Options) {
        try {
            await this.nodemailerTransport.sendMail(options)
        } catch (e) {
            console.error('node-mail-service.sendMail', e)
        }
    }

}
