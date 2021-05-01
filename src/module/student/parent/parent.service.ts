import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParentRepository } from './parent.repository';
import { ParentEntity } from '../../../entities/parent.entity';
import { StudentRepository } from '../student.repository';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(ParentRepository)
    private readonly parentRepository: ParentRepository,
    @InjectRepository(StudentRepository)
    private readonly  studentRepository: StudentRepository) {
  }

  async create(createParentDto: CreateParentDto) {
    const entity = this.parentRepository.create(createParentDto);
    if (createParentDto.student_id) {
      entity.student = await this.studentRepository
        .findOne({ id: createParentDto.student_id });
    }
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
    console.log(parent);
    if (!parent) return null;
    parent.student = await this.studentRepository.findOne(updateParentDto.student_id);
    return this.parentRepository.save(parent);
  }

  remove(id: string) {
    return `This action removes a #${id} parent`;
  }
}
