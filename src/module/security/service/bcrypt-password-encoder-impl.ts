import { PasswordEncoder } from '../interface/password-encoder';
import { compare, hash } from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptPasswordEncoderImpl implements PasswordEncoder {
  async decode(password: string, hashPassword: string): Promise<boolean> {
    return compare(password, hashPassword);
  }

  async encode(password: string, salt: number = 10): Promise<string> {
    return hash(password, salt);
  }

}