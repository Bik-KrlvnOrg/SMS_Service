import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateNewCategoryCommand } from '../impl/create-new-category.command';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from '../../repository';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateNewCategoryCommand)
export class CreateNewCategoryHandler implements ICommandHandler<CreateNewCategoryCommand> {
  logger = new Logger(this.constructor.name);

  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
    private readonly event$: EventBus,
  ) {
  }

  async execute(command: CreateNewCategoryCommand): Promise<any> {
    const save = await this.categoryRepository.save(command.cmd);
    this.logger.log('new category created with id: ', save.name);
    return { success: true };
  }

}