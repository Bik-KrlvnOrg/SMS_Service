export interface ISmsService<T extends any> {
    sendMessage(body: T);
}