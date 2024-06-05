
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';
import { DataSource } from 'typeorm';
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => {
                console.log(configService.get('BD_PASSWORD'))
                return {
                    type: configService.get("BD_TYPE") as any,
                    host: configService.get("BD_HOST"),
                    port: configService.get("BD_PORT"),
                    username: configService.get("BD_USERNAME"),
                    password: configService.get("BD_PASSWORD") as string,
                    database: configService.get("BD_DATABASE") as string,
                    synchronize: configService.get("BD_SYNCHRONIZE"),
                    entities: [Course, Tag]
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
