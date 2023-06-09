import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
<<<<<<< HEAD
import { UserRepository } from '../../repositories/user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtPayload } from '../auth/jwt-payload.interface';
import { User } from '../../entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as mongoose from "mongoose";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDto, session: ClientSession) {
        const createdUser = await this.userRepository.createUser(createUserDto, session);
        return createdUser;
    }
    async findByUsername(payload: JwtPayload): Promise<User[]> {
        return await this.userRepository.getUserByUsername(payload.username );
    }
    async compareHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
    async getUserById(id: MongooseSchema.Types.ObjectId) {
        return await this.userRepository.getUserById(id);
    }
=======
import { UserRepository } from './repository/user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtPayload } from '../auth/jwt-payload.interface';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto, session: ClientSession) {
    const createdUser = await this.userRepository.createUser(
      createUserDto,
      session,
    );
    return createdUser;
  }
  async findByUsername(payload: JwtPayload): Promise<User[]> {
    return await this.userRepository.getUserByUsername(payload.username);
  }
  async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
  async getUserById(id: MongooseSchema.Types.ObjectId) {
    return await this.userRepository.getUserById(id);
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
