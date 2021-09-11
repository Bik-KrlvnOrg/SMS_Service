import {Injectable} from '@nestjs/common';
import {TutorRepository} from "./repository/tutor.repository";
import {CreateTutorDto} from "./dto/create-tutor.dto";
import {AddressEntity} from "../../entities";
import {TutorNotFoundException} from "../../libs/exception/tutor-not-found.exception";
import {AssignSubjectDto} from "./dto/assign-subject.dto";
import {RemoveAddressDto} from "./dto/remove-address.dto";
import {RemoveSubjectDto} from "./dto/remove-subject.dto";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {AssignUserDto} from "./dto/assign-user.dto";

@Injectable()
export class TutorService {
    constructor(
        private readonly tutorRepository: TutorRepository
    ) {
    }

    @Transactional()
    async create(createTutorDto: CreateTutorDto) {
        if (!createTutorDto) throw new Error("arguments can't be null")
        const tutorEntity = this.tutorRepository.create(createTutorDto);
        tutorEntity.addresses = createTutorDto.addresses.map(address => {
            const addressEntity = new AddressEntity();
            addressEntity.city = address.city
            addressEntity.street = address.street
            addressEntity.country = address.country
            addressEntity.stateOrProvince = address.stateOrProvince
            addressEntity.zipOrPostalCode = address.zipOrPostalCode
            return addressEntity
        })
        return this.tutorRepository.save(tutorEntity)
    }

    async get() {
        return this.tutorRepository.find({})
    }

    async getOne(tutorId: string) {
        const tutor = await this.tutorRepository.findOne({id: tutorId});
        if (!tutor) throw new TutorNotFoundException(`tutorId: ${tutorId} not found`)
        return tutor
    }

    @Transactional()
    async delete(tutorId: string) {
        const tutor = await this.getOne(tutorId);
        await this.tutorRepository.remove(tutor)
    }

    @Transactional()
    async assignUser(assignUserDto: AssignUserDto) {
        const tutor = await this.getOne(assignUserDto.tutorId);
        tutor.user = assignUserDto.user
        await this.tutorRepository.save(tutor)
    }

    @Transactional()
    async assignSubject(assignSubjectDto: AssignSubjectDto) {
        const tutor = await this.getOne(assignSubjectDto.tutorId);
        tutor.subjects = assignSubjectDto.subjects
        await this.tutorRepository.save(tutor)
    }

    @Transactional()
    async removeSubject(removeSubjectDto: RemoveSubjectDto) {
        const tutor = await this.getOne(removeSubjectDto.tutorId);
        tutor.subjects = tutor.subjects
            .filter(
                subject => !removeSubjectDto.subjects.map(_subject => _subject.id).includes(subject.id)
            )
        await this.tutorRepository.save(tutor)
    }

    @Transactional()
    async removeAddress(removeAddressDto: RemoveAddressDto) {
        const tutor = await this.getOne(removeAddressDto.tutorId);
        tutor.addresses = tutor.addresses
            .filter(
                address => !removeAddressDto.addresses.map(_address => _address.id).includes(address.id)
            )
        await this.tutorRepository.save(tutor)
    }
}
