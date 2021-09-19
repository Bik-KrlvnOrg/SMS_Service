import {Injectable} from '@nestjs/common';
import {UpdateStudentDto} from './dto';
import {InjectRepository} from '@nestjs/typeorm';
import {StudentRepository} from './student.repository';
import {from} from 'rxjs';
import {AddressEntity} from '../../entities';
import {CreateStudentDto} from "./dto/create-student.dto";
import {plainToClass} from "class-transformer";

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(StudentRepository)
        private readonly studentRepository: StudentRepository) {
    }

    async create(createStudentDto: CreateStudentDto) {
        createStudentDto.first_name = createStudentDto.first_name.trim()
        createStudentDto.last_name = createStudentDto.last_name.trim()
        const studentEntity = this.studentRepository.create(createStudentDto);
        studentEntity.addresses = plainToClass(AddressEntity, createStudentDto.addresses)
        return from(this.studentRepository.save(studentEntity));
    }

    async findAll() {
        return this.studentRepository.find();
    }

    async findOne(id: string) {
        return this.studentRepository.findOne(id);
    }

    update(id: string, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`;
    }

    remove(id: string) {
        return `This action removes a #${id} student`;
    }
}
