
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from "./model/user.model"
import {UserModule} from 'src/users/user.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '54321',
      database: 'dars5',
      autoLoadModels:true,
      synchronize:true,
      models: [User],
      
    }),
    UserModule
  ],
})
export class AppModule {}
