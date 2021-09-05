import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { RoleRepository } from './repository/role.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository) private readonly roleRepository: RoleRepository) {

  }

  @Transactional()
  async create(createRoleDto: CreateRoleDto) {
    createRoleDto.name = createRoleDto.name.toUpperCase()
    const role = await this.roleRepository.findOne({name:createRoleDto.name});
    if (role) return role
    const entity = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(entity);
  }

  async findAll() {
    return this.roleRepository.find({});
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ id });
  }

  async findIds(ids: string[]) {
    return this.roleRepository.findByIds(ids);
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: string) {
    return `This action removes a #${id} role`;
  }
}
