import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
// import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
// import { UserServiceProvider } from 'src/users/users.provider';
import { jwtConstants } from './constants';
<<<<<<< HEAD
import {PermissionModule} from "../permission/permission.module";

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            // secretOrPrivateKey: 'secretKey',
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '100000s' },
        }),
        UserModule,
        PermissionModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        // ...UserServiceProvider,
    ],
})
export class AuthModule { }
=======
import { PermissionModule } from '../permission/permission.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // secretOrPrivateKey: 'secretKey',
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '100000s' },
    }),
    UserModule,
    PermissionModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    // ...UserServiceProvider,
  ],
})
export class AuthModule {}
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
