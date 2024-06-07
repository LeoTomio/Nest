
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'devtraining',
    synchronize: false, //USAR APENAS EM DESENVOLVIMENTO, pois se algo for alterado na tabela, limpa todos os dados
    entities: [Course, Tag],
    migrations: [__dirname + "/migrations/*{.ts,.js}"],
}
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (/*configService: ConfigService*/) => {
                return {
                    ...dataSourceOptions
                    // type: configService.get("BD_TYPE") as any,
                    // host: configService.get("BD_HOST"),
                    // port: configService.get("BD_PORT"),
                    // username: configService.get("BD_USERNAME"),
                    // password: configService.get("BD_PASSWORD") as string,
                    // database: configService.get("BD_DATABASE") as string,
                    // synchronize: configService.get("BD_SYNCHRONIZE"), //USAR APENAS EM DESENVOLVIMENTO, pois se algo for alterado na tabela, limpa todos os dados
                    // entities: [Course, Tag]
                }
            },
            inject: [ConfigService],
        })
    ],
    providers: [
        {
            provide: 'DATABASE_CONFIG',
            useFactory: (dataSource: DataSource) => dataSource,
            inject: [DataSource],
        },
    ],
    exports: ['DATABASE_CONFIG'],
})

export class DatabaseModule { }
