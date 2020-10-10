import { ISmsService } from "./sms-service.interface";

export interface INotificationService {
    sendEmail(): Promise<void>
    sendSms(body: Record<string, any>): Promise<void>
    sendPush(): Promise<void>
}