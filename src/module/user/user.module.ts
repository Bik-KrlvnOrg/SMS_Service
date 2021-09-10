import {Module} from '@nestjs/common';
import {UserService} from './service';
import {UserController} from './constroller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserRepository} from './repository';
import {SecurityModule} from '../security';
import {RoleModule} from '../role/role.module';
import {NotificationModule} from "../notification/notification.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository]),
        SecurityModule, RoleModule, NotificationModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {
}
