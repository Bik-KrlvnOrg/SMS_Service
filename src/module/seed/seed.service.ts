import {Injectable} from '@nestjs/common';
import {RoleService} from "../role/role.service";
import {UserService} from "../user/service";
import {CreateUserDto} from "../user/dto";
import {CreateRoleDto} from "../role/dto/create-role.dto";
import {ConfirmationTokenService} from "../security/service";
import {PermissionEntity, UserEntity} from "../../entities";

@Injectable()
export class SeedService {
    constructor(
        private readonly userService: UserService,
        private readonly roleService: RoleService,
        private readonly confirmationTokenService: ConfirmationTokenService
    ) {

    }

    async seed() {
        try {
            const permissions: PermissionEntity[] = ['VIEW', 'CREATE', 'EDIT', 'DELETE'].map((p) => {
                const permission = new PermissionEntity()
                permission.name = p
                return permission
            })
            const createRoleDto = new CreateRoleDto();
            createRoleDto.name = "Super_Admin"
            createRoleDto.permissions = permissions
            const roleEntity = await this.roleService.create(createRoleDto);

            const createUserDto = new CreateUserDto();
            createUserDto.username = "admin"
            createUserDto.password = "admin"
            createUserDto.email = "admin@me.com"
            const user = await this.userService.create(createUserDto);

            if (user) {
                const userEntity = new UserEntity();
                userEntity.id = user.id
                userEntity.role = [roleEntity]
                const tokenEntity = await this.confirmationTokenService.findByUser(userEntity);
                console.log('username', createUserDto.username)
                console.log('password', createUserDto.password)
                console.log("confirmation-token", tokenEntity.token)
                // assign a role
                await this.userService.save(userEntity)
            }

        } catch (e) {
            console.error(e)
        }

    }

}
