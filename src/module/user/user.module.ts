import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './constroller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { SecurityModule } from '../security/security.module';
import { RoleModule } from '../role/role.module';
import { UserManagementController } from './constroller/user-management.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    SecurityModule, RoleModule],
  controllers: [UserController, UserManagementController],
  providers: [UserService],
})
export class UserModule {
}
