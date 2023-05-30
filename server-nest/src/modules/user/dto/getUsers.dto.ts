import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
<<<<<<< HEAD
import {Schema as MongooseSchema} from "mongoose";

export class GetUsersDto {
    @IsOptional()
    id: MongooseSchema.Types.ObjectId;

    @IsOptional()
    current?: number;

    @IsOptional()
    @IsPositive()
    pageSize?: number;
=======
import { Schema as MongooseSchema } from 'mongoose';

export class GetUsersDto {
  @IsOptional()
  id: MongooseSchema.Types.ObjectId;

  @IsOptional()
  current?: number;

  @IsOptional()
  @IsPositive()
  pageSize?: number;
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
