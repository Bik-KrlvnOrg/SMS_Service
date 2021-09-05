import { Expose } from 'class-transformer';

export class CreateUserDto {
  @Expose({ name: 'first_name' })
  firstName: string;
  @Expose({ name: 'last_name' })
  lastName: string;
  email: string;
  @Expose({ name: 'middle_name' })
  middleName: string;
  password: string;
  username: string;

}
