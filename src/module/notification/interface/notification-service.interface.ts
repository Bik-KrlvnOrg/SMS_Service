
export interface INotificationService {
    sendEmail(): void
    sendSms(): void
    sendPush(): void
}