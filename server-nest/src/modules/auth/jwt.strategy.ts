import { JwtPayload } from './jwt-payload.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload) {
<<<<<<< HEAD
    const user = await this.authService.validateUser(payload.username, payload.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log("JwtStrategy validate user----",user);
=======
    const user = await this.authService.validateUser(
      payload.username,
      payload.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log('JwtStrategy validate user----', user);
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
    return user;
  }
}
