import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  @Transactional()
  async createUser(data: CreateUserDto): Promise<UserEntity> {
    const entity = this.create(data);
    return this.save(entity);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.findOne({ email });
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.findOne({ username });
  }
}