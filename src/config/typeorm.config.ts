import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const TypeOrmConfig:TypeOrmModuleOptions = {
    name:'default',
    type:'mysql',
    database:process.env.DATABASE_DB,
    username:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    host:process.env.DATABASE_HOST,
    port:Number(process.env.DATABASE_PORT),
    synchronize:false,
    entities: ['dist/entities/*.js'],
    logging:true,
    dropSchema:false
}