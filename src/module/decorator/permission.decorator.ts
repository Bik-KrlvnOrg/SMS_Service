import {Permission, RESOURCE_DEFINITION} from '../../libs';
import {SetMetadata} from '@nestjs/common';

export const RolePermission = (...permissions: Permission[]) =>
    SetMetadata(RESOURCE_DEFINITION.PERMISSION_KEY, permissions);