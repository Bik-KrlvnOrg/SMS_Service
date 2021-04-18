import { EntityRepository, Repository } from 'typeorm';
import { EsForumPost } from '../../../../entities/EsForumPost';

@EntityRepository(EsForumPost)
export class PostRepository extends Repository<EsForumPost>{

}