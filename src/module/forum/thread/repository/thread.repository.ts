import { EntityRepository, Repository } from 'typeorm';
import { EsForumThread } from '../../../../entities/EsForumThread';

@EntityRepository(EsForumThread)
export class ThreadRepository extends Repository<EsForumThread>{

}