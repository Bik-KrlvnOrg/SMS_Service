import { Body, Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryInput } from './dto';
import { ResponseObject } from '../../../model/response.model';

@Controller('forum/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
  }

  async addCategory(@Body() dto: CategoryInput): Promise<ResponseObject<'data', any>> {
    const result = await this.categoryService.createCategory(dto);
    return { data: result };
  }
}
