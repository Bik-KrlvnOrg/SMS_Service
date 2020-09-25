import { ICommand } from '@nestjs/cqrs'

export class DeleteFeesPaidCommand implements ICommand {
    constructor(public readonly cmd: number) { }
}