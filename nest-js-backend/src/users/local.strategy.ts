import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: UsersService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(username: string): Promise<any> {
    const user = await this.authService.findOneByEmail(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}