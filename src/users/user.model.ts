
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserContoller } from './user.contoller';
import { UserService } from './user.servers';
import { User } from 'src/model/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserContoller],
})
export class UserModule {}
