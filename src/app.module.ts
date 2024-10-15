import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/Users';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "nova_connect",
      autoLoadModels: true,
      synchronize: true,
      models: [
        Users
      ],
      logging: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
