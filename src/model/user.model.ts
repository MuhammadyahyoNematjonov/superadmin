
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRole } from 'src/global/type/user.role';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password:Number

  @Column({
    type:DataType.ENUM(...Object.values(UserRole)),
    defaultValue:UserRole.User
  })
  role:UserRole
}
