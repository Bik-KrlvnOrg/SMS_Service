export interface UserDetails {
  getPassword(): string

  getUsername(): string

  isAccountNonExpired(): boolean

  isAccountNonLocked(): boolean

  isCredentialsNonExpired(): boolean

  isEnabled(): boolean
}