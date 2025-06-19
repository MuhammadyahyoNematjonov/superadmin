
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserContoller } from './user.contoller';
import { UsersService } from './users.servers';
import { User } from 'src/model/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UserContoller],
})
export class UsersModule {}
