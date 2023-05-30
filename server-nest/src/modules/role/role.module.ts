import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { Role, RoleSchema } from '../../entities/role.entity';
import { RoleRepository } from '../../repositories/role.repository';
=======
import { Role, RoleSchema } from './entity/role.entity';
import { RoleRepository } from './repository/role.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])],
    controllers: [RoleController],
    providers: [RoleService, RoleRepository],
    exports: [RoleService, RoleRepository],
=======
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
  exports: [RoleService, RoleRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class RoleModule {}
