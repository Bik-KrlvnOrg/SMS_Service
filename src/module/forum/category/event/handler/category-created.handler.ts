import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CategoryCreatedEvent } from '../impl/category-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(CategoryCreatedEvent)
export class CategoryCreatedHandler implements IEventHandler<CategoryCreatedEvent> {
  logger = new Logger(this.constructor.name);

  handle(event: CategoryCreatedEvent): any {
    this.logger.log(event, event.constructor.name);
  }

}