import { ICommand } from '@nestjs/cqrs'

export class DeleteFeesPaidDetailCommand implements ICommand {
    constructor(public readonly cmd: number) { }
}