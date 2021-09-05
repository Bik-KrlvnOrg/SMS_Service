import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PermissionRepository} from "./repository/permission.repository";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {CreatePermissionDto} from "./dto/create-permission.dto";
import {UpdatePermissionDto} from "./dto/update-permission.dto";

@Injectable()
export class PermissionService {
    constructor(
        @InjectRepository(PermissionRepository)
        private readonly permissionRepository: PermissionRepository) {
    }

    @Transactional()
    async create(createPermissionDto: CreatePermissionDto) {
        createPermissionDto.name = createPermissionDto.name.toUpperCase()
        const permission = await this.permissionRepository.findOne({name: createPermissionDto.name});
        if (permission) return permission
        const entity = this.permissionRepository.create(createPermissionDto);
        return this.permissionRepository.save(entity);
    }

    async findAll() {
        return this.permissionRepository.find({});
    }

    async findOne(id: string) {
        return this.permissionRepository.findOne({id});
    }

    async findIds(ids: string[]) {
        return this.permissionRepository.findByIds(ids);
    }

    async update(id: string, updatePermissionDto: UpdatePermissionDto) {
        return `This action updates a #${id} permission`;
    }

    async remove(id: string) {
        return `This action removes a #${id} permission`;
    }
}
