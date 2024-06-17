import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>
    ) { }



    async findAll() {
        return this.courseRepository.find({
            relations: ['tags']
        })
    }

    async findOne(id: string) {
        const course = await this.courseRepository.findOne({
            relations: ['tags'],
            where: { id }
        })
        if (!course) {
            // throw new HttpException(`Curso com id ${id} não encontrado`, HttpStatus.NOT_FOUND)
            throw new NotFoundException(`Curso com id ${id} não encontrado`)
        }
        return course
    }

    async create(createCourseDTO: CreateCourseDTO) {
        const tags = await Promise.all(
            createCourseDTO.tags.map(name => this.preloadTagByName(name))
        )
        const course = this.courseRepository.create({
            ...createCourseDTO,
            tags
        })
        return this.courseRepository.save(course)
    }

    async update(id: string, updateCourseDTO: UpdateCourseDTO) {
        const tags = updateCourseDTO.tags && await Promise.all(
            updateCourseDTO.tags.map(name => this.preloadTagByName(name))
        )

        const course = await this.courseRepository.preload({
            ...updateCourseDTO,
            id,
            tags
        })
        if (!course) {
            throw new NotFoundException(`Curso com id ${id} não encontrado`)
        }
        return this.courseRepository.save(course)
    }

    async remove(id: string) {
        const course = await this.findOne(id)
        return this.courseRepository.remove(course)
    }

    private async preloadTagByName(name: string): Promise<Tag> {
        const tag = await this.tagRepository.findOne({ where: { name } })
        if (tag) {
            return tag
        }
        return this.tagRepository.create({ name })
    }
}
