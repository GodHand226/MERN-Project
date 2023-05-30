import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { Resource, ResourceSchema } from '../../entities/resource.entity';
import { ResourceRepository } from '../../repositories/resource.repository';
=======
import { Resource, ResourceSchema } from './entity/resource.entity';
import { ResourceRepository } from './repository/resource.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: Resource.name, schema: ResourceSchema }])],
    controllers: [ResourceController],
    providers: [ResourceService, ResourceRepository],
    exports: [ResourceService, ResourceRepository],
=======
  imports: [
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourceController],
  providers: [ResourceService, ResourceRepository],
  exports: [ResourceService, ResourceRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class ResourceModule {}
