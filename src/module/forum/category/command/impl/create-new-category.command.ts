import { ICommand } from '@nestjs/cqrs'
import { CategoryInput } from '../../dto';

export class CreateNewCategoryCommand implements ICommand {
    constructor(public readonly cmd: CategoryInput) { }
}