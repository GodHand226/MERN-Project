import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

<<<<<<< HEAD
import { Product, ProductSchema } from '../../entities/product.entity';
import { ProductRepository } from '../../repositories/product.repository';
=======
import { Product, ProductSchema } from './entity/product.entity';
import { ProductRepository } from './repository/product.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
<<<<<<< HEAD
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
    exports: [ProductService, ProductRepository],
=======
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService, ProductRepository],
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
})
export class ProductModule {}
