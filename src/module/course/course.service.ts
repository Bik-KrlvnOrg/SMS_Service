import {Injectable} from '@nestjs/common';
import {CourseRepository} from "./repository/course.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateCourseDto} from "./dto/create-course.dto";
import {Transactional} from "typeorm-transactional-cls-hooked";
import {RemoveSubjectDto} from "./dto/remove-subject.dto";
import {CourseNotFoundException} from "../../libs/exception/course-not-found.exception";
import {UpdateCourseDto} from "./dto/update-course.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(CourseRepository)
        private readonly courseRepository: CourseRepository
    ) {

    }

    @Transactional()
    async create(createCourseDto: CreateCourseDto) {
        createCourseDto.name = createCourseDto.name.trim().toLocaleUpperCase();
        createCourseDto.subjects = createCourseDto.subjects.map(subject => {
            if (!subject.name) return subject
            subject.name = subject.name.trim().toLocaleUpperCase()
            return subject
        })
        const course = await this.courseRepository.findOne({name: createCourseDto.name});
        if (course) return course;
        const courseEntity = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(courseEntity);
    }

    @Transactional()
    async update(updateCourseDto: UpdateCourseDto) {
        const course = await this.getOne(updateCourseDto.course_id);
        course.name = updateCourseDto.name.trim().toLocaleUpperCase();
        course.code = updateCourseDto.code;
        course.capacity = updateCourseDto.capacity;
        course.subjects = updateCourseDto.subjects;
        course.description = updateCourseDto.description;
        return this.courseRepository.save(course)
    }

    async get() {
        return this.courseRepository.find({})
    }

    async getOne(courseId: string) {
        const course = await this.courseRepository.findOne({id: courseId});
        if (!course) throw new CourseNotFoundException(`Course Id: ${courseId} not found`)
        return course
    }

    @Transactional()
    async removeSubject(removeSubjectDto: RemoveSubjectDto) {
        const course = await this.courseRepository.findOne({id: removeSubjectDto.course_id});
        course.subjects = course.subjects.filter(
            subject => !removeSubjectDto.subjects.map(s => s.id).includes(subject.id)
        )
        const courseEntity = this.courseRepository.create(course);
        return this.courseRepository.save(courseEntity)
    }

    @Transactional()
    async delete(courseId: string) {
        const course = await this.getOne(courseId);
        await this.courseRepository.remove(course)
    }

}
