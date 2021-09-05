import {Module} from '@nestjs/common';
import {SeedService} from './seed.service';
import {RoleModule} from "../role/role.module";
import {UserModule} from "../user";
import {SecurityModule} from "../security";
import {UserService} from "../user/service";

@Module({
    imports:[RoleModule,SecurityModule,UserModule],
    providers: [SeedService]
})
export class SeedModule {
}
