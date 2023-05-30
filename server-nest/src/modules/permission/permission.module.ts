import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { Permission, PermissionSchema } from '../../entities/permission.entity';
import { PermissionRepository } from '../../repositories/permission.repository';
=======
import { Permission, PermissionSchema } from './entity/permission.entity';
import { PermissionRepository } from './repository/permission.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: Permission.name, schema: PermissionSchema }])],
    controllers: [PermissionController],
    providers: [PermissionService, PermissionRepository],
    exports: [PermissionService, PermissionRepository],
=======
  imports: [
    MongooseModule.forFeature([
      { name: Permission.name, schema: PermissionSchema },
    ]),
  ],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionRepository],
  exports: [PermissionService, PermissionRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class PermissionModule {}
