import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Permission, RESOURCE_DEFINITION, Role} from '../../../libs';
import {UserPayload} from '../strategy';
import {RolePermission} from "../interface";


@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
            RESOURCE_DEFINITION.PERMISSION_KEY, [
                context.getHandler(),
                context.getClass(),
            ],
        );
        if (!requiredPermissions) return true;
        const request = context.switchToHttp().getRequest();
        const user: UserPayload = request.user;

        let hasAction = false
        user.permissions.forEach((d) =>{
            hasAction = requiredPermissions.some((p:Permission) => d.actions.includes(p));
        })
        console.log('has-perm', {user: user.username, requiredPermissions: requiredPermissions, hasPermission: hasAction});
        return hasAction
    }

}