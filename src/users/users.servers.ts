
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';
import { where } from 'sequelize';
import { User } from 'src/model/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User)private userModel: typeof User,) {}
    async createuser(payload: Partial<User>) {
        let newuser = await this.userModel.create(payload)
        return newuser
    }

     async getusers(payload: Partial<User>) {
        const newuser = await this.userModel.findAll({where:payload})
        return newuser
    }

   async putusers(id: number, payload: Partial<User>) {
  const [updated] = await this.userModel.update(payload, {where: { id },});
  if (!updated) {
    throw new Error(`Bunday id = ${id} bo'lgan foydalanuvchi topilmadi`);
  }
    return this.userModel.findOne({ where: { id } });

   }

    async deleteuserss(id: number) {
  const updated = await this.userModel.destroy( { where: { id } });
  
    return { message: ` ${id}-id ochirdi` };

   }
}
