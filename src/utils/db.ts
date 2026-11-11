import {TypeOrmModule} from '@nestjs/typeorm'

export const DBModule = TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "qwerty007",
    database: "insurance_project",
    autoLoadEntities: true,
    synchronize: true
})