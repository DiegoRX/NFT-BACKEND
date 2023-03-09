import { Injectable } from '@nestjs/common/decorators';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-local';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('email or password incorrect');
    }
    return user;
  }
}
