
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'devtraining',
    entities: [],
    synchronize: true, // depois que a entidade esta definida no codigo, ela cria automaticamente no banco de dados a coluna 
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => {
                return {
                    ...dataSourceOptions
                }
            }
        })
    ],
})

export class DatabaseModule { }
