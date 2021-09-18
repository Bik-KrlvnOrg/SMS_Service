import {Module} from '@nestjs/common';
import {SubjectTypeService} from './subject-type.service';
import {SubjectTypeController} from './subject-type.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubjectTypeRepository} from "./repository/subject-type.repository";

@Module({
  imports: [TypeOrmModule.forFeature([SubjectTypeRepository])],
  providers: [SubjectTypeService],
  controllers: [SubjectTypeController]
})
export class SubjectTypeModule {
}
