import { ICommand } from '@nestjs/cqrs'

export class DeleteFineChargedCommand implements ICommand {
    constructor(public readonly cmd: number) { }
}