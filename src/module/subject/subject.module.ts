import {Module} from '@nestjs/common';
import {SubjectService} from './subject.service';
import {SubjectController} from './subject.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubjectRepository} from "./repository/subject.repository";
import {SubjectTypeModule} from './subject-type/subject-type.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([SubjectRepository]),
        SubjectTypeModule
    ],
    providers: [SubjectService],
    controllers: [SubjectController]
})
export class SubjectModule {
}
