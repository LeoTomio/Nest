import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll() {
        return "Listagem dos cursos"
    }

    @Get("/types")
    findAllCoursesTypes() {
        return "Listagem dos tipos de cursos"
    }
}
