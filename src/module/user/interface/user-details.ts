import {RolePermission} from "../../security/interface";

export interface UserDetails {
  getUserId(): string

  getUsername(): string

  isAccountNonExpired(): boolean

  isAccountNonLocked(): boolean

  isCredentialsNonExpired(): boolean

  isEnabled(): boolean

  getRoles():string[]

  getPermissions():RolePermission[]
}