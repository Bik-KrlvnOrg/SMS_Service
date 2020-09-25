import { ICommand } from '@nestjs/cqrs'

export class DeleteFeesPaymentCommand implements ICommand {
    constructor(public readonly cmd: number) { }
}