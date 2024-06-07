import { DataSource } from "typeorm";
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1717722806029 } from "src/migrations/1717722806029-CreateCoursesTable";
import { CreateTagsTable1717726524427 } from "src/migrations/1717726524427-CreateTagsTable";


export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1717722806029, CreateTagsTable1717726524427]
});
