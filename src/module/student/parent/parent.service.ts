import {Injectable} from '@nestjs/common';
import {CreateParentDto, UpdateParentDto} from './dto';
import {InjectRepository} from '@nestjs/typeorm';
import {ParentRepository} from './parent.repository';
import {ParentEntity} from '../../../entities';
import {StudentRepository} from '../student.repository';

@Injectable()
export class ParentService {
  constructor(
      @InjectRepository(ParentRepository)
      private readonly parentRepository: ParentRepository,
      @InjectRepository(StudentRepository)
      private readonly studentRepository: StudentRepository) {
  }

  async create(createParentDto: CreateParentDto) {
    const entity = this.parentRepository.create(createParentDto);
    return this.parentRepository.save(entity);
  }

  async findAll(): Promise<ParentEntity[]> {
    return this.parentRepository.find();
  }

  async findOne(id: string) {
    return this.parentRepository.findOne({ id });
  }

  async update(id: string, updateParentDto: UpdateParentDto): Promise<ParentEntity> {
    const parent = await this.findOne(id);
    if (!parent) return null;
    return this.parentRepository.save({...parent, updateParentDto});
  }

  remove(id: string) {
    return `This action removes a #${id} parent`;
  }
}
