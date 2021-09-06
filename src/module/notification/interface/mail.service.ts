export interface MailService {
    sendMail(options: any)
}

export interface MailerConfig {
    service: string
    auth: {
        user: string
        password: string
    }
    port: number
}

export const MAIL_PROVIDER = "MailService"