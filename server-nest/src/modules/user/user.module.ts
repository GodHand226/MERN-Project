import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { User, UserSchema } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';
=======
import { User, UserSchema } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService, UserRepository],
=======
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class UserModule {}
