import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './constroller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { SecurityModule } from '../security/security.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]),SecurityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
