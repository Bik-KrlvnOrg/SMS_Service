import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { RESOURCE_DEFINITION } from '../../../libs';
import { UserPayload } from '../strategy/jwt.strategy';


@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>(RESOURCE_DEFINITION.ROLES_KEY, context.getHandler);
    if (!roles) return true;
    const request = context.switchToHttp().getRequest();
    const user:UserPayload = request.user;
    const hasRole = () => user.roles.some((role) => roles.includes(role));
    return user && user.roles && hasRole();
  }

}