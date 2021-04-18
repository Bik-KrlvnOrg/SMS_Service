import { EntityRepository, Repository } from 'typeorm';
import { EsForumVote } from '../../../../entities/EsForumVote';

@EntityRepository(EsForumVote)
export class VoteRepository extends Repository<EsForumVote>{

}