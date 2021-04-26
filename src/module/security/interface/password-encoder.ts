export interface PasswordEncoder {
  encode(password: string): Promise<string>

  decode(password: string, hashPassword: string): Promise<boolean>
}