import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config, TypeOrmConfigService } from './libs';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './module/student';
import { UserModule } from './module/user';
import { SecurityModule } from './module/security';
import { RoleModule } from './module/role/role.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    StudentModule,
    UserModule,
    SecurityModule,
    RoleModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
