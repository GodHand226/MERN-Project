import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { Blog, BlogSchema } from '../../entities/blog.entity';
import { BlogRepository } from '../../repositories/blog.repository';
=======
import { Blog, BlogSchema } from './entity/blog.entity';
import { BlogRepository } from './repository/blog.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }])],
    controllers: [BlogController],
    providers: [BlogService, BlogRepository],
    exports: [BlogService, BlogRepository],
=======
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
  exports: [BlogService, BlogRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class BlogModule {}
