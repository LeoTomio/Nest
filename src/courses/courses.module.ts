import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/courses.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [CoursesController],
    providers: [CoursesService],
    exports: [CoursesService] // para permitir que esse serviço seja usado em fora desse modulo
})
export class CoursesModule { }
