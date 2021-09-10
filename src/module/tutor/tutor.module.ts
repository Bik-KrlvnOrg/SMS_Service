import {Module} from '@nestjs/common';
import {TutorService} from './tutor.service';
import {TutorController} from './tutor.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TutorRepository} from "./repository/tutor.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([TutorRepository])
    ],
    providers: [TutorService],
    controllers: [TutorController]
})
export class TutorModule {
}
