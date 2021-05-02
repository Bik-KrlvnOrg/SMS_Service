import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RESOURCE_DEFINITION, Role } from '../../../libs';
import { UserPayload } from '../strategy';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      RESOURCE_DEFINITION.ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ],
    );
    if (!requiredRoles) return true;
    const request = context.switchToHttp().getRequest();
    const user: UserPayload = request.user;
    const hasRole = () => requiredRoles
      .some((role: Role) => user.roles?.includes(role));
    console.log('has-role', { user: user.username, requiredRoles,hasRole: hasRole() });
    return hasRole();
  }

}