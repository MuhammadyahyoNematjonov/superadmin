
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.servers';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    
    return result;
  }
}
