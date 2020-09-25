import { ICommand } from '@nestjs/cqrs'

export class DeleteVoucherEntryCommand implements ICommand {
    constructor(public readonly cmd: number) { }
}