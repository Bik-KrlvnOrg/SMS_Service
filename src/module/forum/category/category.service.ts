import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CategoryInput } from './dto';
import { from, Observable } from 'rxjs';
import { CreateNewCategoryCommand } from './command';

@Injectable()
export class CategoryService {
  constructor(private readonly commandBus: CommandBus) {
  }

  async createCategory(data: CategoryInput): Promise<Observable<any>> {
    return from(this.commandBus.execute(new CreateNewCategoryCommand(data)));
  }

}
