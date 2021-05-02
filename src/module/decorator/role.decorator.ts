import { RESOURCE_DEFINITION, Role } from '../../libs';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: Role[]) => SetMetadata(RESOURCE_DEFINITION.ROLES_KEY, roles);