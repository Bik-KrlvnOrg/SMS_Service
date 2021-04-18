import { EntityRepository, Repository } from 'typeorm';
import { EsForumCategory } from '../../../../entities/EsForumCategory';
import { CategoryInput } from '../dto';

@EntityRepository(EsForumCategory)
export class CategoryRepository extends Repository<EsForumCategory> {
  createCategory(data: CategoryInput): Promise<EsForumCategory> {
    const entity = this.create(data);
    return this.save(entity);
  }
}