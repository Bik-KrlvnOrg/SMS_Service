import { UserDetails } from './user-details';

export interface UserDetailService {
  /**
   * @throws {Error}
   */
  loadUserByUsername(username: string): Promise<UserDetails | never>
  loadUserById(userId: string): Promise<UserDetails | never>
}