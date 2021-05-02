import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController } from './constroller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository';
import { SecurityModule } from '../security';
import { RoleModule } from '../role/role.module';
import { UserManagementController } from './constroller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    SecurityModule, RoleModule],
  controllers: [UserController, UserManagementController],
  providers: [UserService],
})
export class UserModule {
}
