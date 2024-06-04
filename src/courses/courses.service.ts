import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "Nest.js",
            description: "Curso sobre os fundamentos do framework Nest.js",
            tags: ['Nest.js', 'node.js', 'javascript', 'typescript']
        }
    ]


    findAll() {
        return this.courses
    }

    findOne(id: number) {
        const course = this.courses.find((course) => course.id === id)
        if (!course) {
            // throw new HttpException(`Curso com id ${id} não encontrado`, HttpStatus.NOT_FOUND)
            throw new NotFoundException(`Curso com id ${id} não encontrado`)
        }
        return course
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
        return createCourseDTO
    }

    update(id: number, updateCourseDTO: any) {
        const existingCourses = this.findOne(id)
        if (existingCourses as any) {
            const index = this.courses.findIndex((course) => course.id === id)
            this.courses[index] = {
                id,
                ...updateCourseDTO
            }
        }
    }
    remove(id: number) {

        const index = this.courses.findIndex((course) => course.id === id)
        if (index >= 0) {
            this.courses.splice(index, 1)
        }
    }
}
