import { Injectable } from '@nestjs/common';
import { Courses } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Courses[] = [
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
        return this.courses.find((course) => course.id === id)
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
    }

    update(id: number, updateCourseDTO: any) {
        const existingCourses = this.courses.find((course) => course.id === id)
        if (existingCourses) {
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
