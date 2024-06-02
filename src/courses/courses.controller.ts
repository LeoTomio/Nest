import { CoursesService } from './courses.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService: CoursesService) { }

    @Get()
    findAll(@Res() response) {
        return response.status(200).json({ message: 'Lista de Cursos' })
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
    create(@Body() body) {
        return body
    }


    @Put(":id")
    update(@Param("id") id: string, @Body() body) {
        console.log(body)
        return `Curso com id ${id} atualizado.`
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `Curso com id ${id} deletado.`
    }
}
