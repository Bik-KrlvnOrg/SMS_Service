import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController, UserManagementController } from './constroller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository';
import { SecurityModule } from '../security';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    SecurityModule, RoleModule],
  controllers: [UserController, UserManagementController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {
}
