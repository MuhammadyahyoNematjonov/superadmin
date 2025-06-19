
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from "./model/user.model"
import {UsersModule} from 'src/users/user.model'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'dars12',
      autoLoadModels:true,
      synchronize:true,
      models: [User],
      
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
