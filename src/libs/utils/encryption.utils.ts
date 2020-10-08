import { hash } from "bcryptjs"

export const hashPassword = async (password: string): Promise<string> => {
    const salt = 10
    return hash(password, salt)
}