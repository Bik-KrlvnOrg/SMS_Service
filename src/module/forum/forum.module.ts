import { Module } from '@nestjs/common';
import { ThreadModule } from './thread/thread.module';
import { PostModule } from './post/post.module';
import { VoteModule } from './vote/vote.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ThreadModule, PostModule, VoteModule, CategoryModule]
})
export class ForumModule {}
