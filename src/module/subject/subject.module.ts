import {Module} from '@nestjs/common';
import {SubjectService} from './subject.service';
import {SubjectController} from './subject.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubjectRepository} from "./repository/subject.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([SubjectRepository])
    ],
    providers: [SubjectService],
    controllers: [SubjectController]
})
export class SubjectModule {
}
