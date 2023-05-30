import {
<<<<<<< HEAD
    ExecutionContext,
    Injectable,
    UnauthorizedException,
=======
  ExecutionContext,
  Injectable,
  UnauthorizedException,
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
<<<<<<< HEAD
    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
=======
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
