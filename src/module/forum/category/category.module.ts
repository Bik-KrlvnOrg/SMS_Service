import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './repository';
import { CreateNewCategoryHandler } from './command';
import { CategoryCreatedHandler } from './event/handler';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

const CommandHandlers = [CreateNewCategoryHandler];
const EventHandlers = [CategoryCreatedHandler];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CategoryRepository])],
  providers: [...CommandHandlers, ...EventHandlers, CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {
}
