import {Module} from '@nestjs/common';
import {SubjectTypeService} from './subject-type.service';
import {SubjectTypeController} from './subject-type.controller';

@Module({
  providers: [SubjectTypeService],
  controllers: [SubjectTypeController]
})
export class SubjectTypeModule {
}
