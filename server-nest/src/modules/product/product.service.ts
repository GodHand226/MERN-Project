import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from 'src/dto/getQueryDto';
<<<<<<< HEAD
import { ProductRepository } from '../../repositories/product.repository';
=======
import { ProductRepository } from './repository/product.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { CreateProductDto } from './dto/createProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
<<<<<<< HEAD
    constructor(private productRepository: ProductRepository) {}

    async createProduct(createProductDto: CreateProductDto, session: ClientSession) {
        return await this.productRepository.createProduct(createProductDto, session);
    }

    async getProductById(productId: MongooseSchema.Types.ObjectId) {
        return await this.productRepository.getProductById(productId);
    }

    async getProducts(getQueryDto: GetQueryDto) {
        return await this.productRepository.getProducts(getQueryDto);
    }

    async updateProduct(updateProductDto: UpdateProductDto, session: ClientSession) {
        return await this.productRepository.updateProduct(updateProductDto, session);
    }

    async deleteProduct(productId: MongooseSchema.Types.ObjectId, session: ClientSession) {
        return await this.productRepository.deleteProduct(productId, session);
    }
=======
  constructor(private productRepository: ProductRepository) {}

  async createProduct(
    createProductDto: CreateProductDto,
    session: ClientSession,
  ) {
    return await this.productRepository.createProduct(
      createProductDto,
      session,
    );
  }

  async getProductById(productId: MongooseSchema.Types.ObjectId) {
    return await this.productRepository.getProductById(productId);
  }

  async getProducts(getQueryDto: GetQueryDto) {
    return await this.productRepository.getProducts(getQueryDto);
  }

  async updateProduct(
    updateProductDto: UpdateProductDto,
    session: ClientSession,
  ) {
    return await this.productRepository.updateProduct(
      updateProductDto,
      session,
    );
  }

  async deleteProduct(
    productId: MongooseSchema.Types.ObjectId,
    session: ClientSession,
  ) {
    return await this.productRepository.deleteProduct(productId, session);
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
