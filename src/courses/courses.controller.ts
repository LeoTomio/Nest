import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

    @Get(":id/:name")
    findOne(@Param('id') id: string, @Param('name') name: string) {
        return `Curso com id ${id} - Nome: ${name}`
    }

    @Post()
    create(@Body() body){
        return body
    }
}
