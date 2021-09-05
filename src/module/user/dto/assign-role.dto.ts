import { Expose } from 'class-transformer';

export class AssignRoleDto {
  @Expose({ name: 'user_id'})
  userId: string;
  roles: string[];
}