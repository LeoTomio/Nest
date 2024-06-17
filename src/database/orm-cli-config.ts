import { DataSource } from "typeorm";
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1717722806029 } from "src/migrations/1717722806029-CreateCoursesTable";
import { CreateTagsTable1717726524427 } from "src/migrations/1717726524427-CreateTagsTable";
import { CreateCoursesTagsTable1718635088485 } from "src/migrations/1718635088485-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1718636222268 } from "src/migrations/1718636222268-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1718636777769 } from "src/migrations/1718636777769-AddTagsIdToCoursesTagsTable";


export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [
        CreateCoursesTable1717722806029,
        CreateTagsTable1717726524427,
        CreateCoursesTagsTable1718635088485,
        AddCoursesIdToCoursesTagsTable1718636222268,
        AddTagsIdToCoursesTagsTable1718636777769
    ]
});
