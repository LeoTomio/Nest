import { Body, Controller, Get, HttpCode, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({message:'Lista de Cursos'})
    }

    @Get("/types")
    findAllCoursesTypes() {
        return "Listagem dos tipos de cursos"
    }

    @Get(":id/:name")
    findOne(@Param('id') id: string, @Param('name') name: string) {
        return `Curso com id ${id} - Nome: ${name}`
    }

    // @HttpCode(204)
    @Post()
    create(@Body() body){
        return body
    }
}
