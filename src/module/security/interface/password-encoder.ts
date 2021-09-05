export interface PasswordEncoder {
    encode(password: string): Promise<string>

    decode(password: string, hashPassword: string): Promise<boolean>
}

export interface RolePermission {
    role: string
    actions: string[]
}