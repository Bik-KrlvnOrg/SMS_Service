import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentRepository } from './parent.repository';
import { StudentRepository } from '../student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ParentRepository, StudentRepository])],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {
}
