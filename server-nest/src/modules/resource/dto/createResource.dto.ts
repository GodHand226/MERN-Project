<<<<<<< HEAD
import {IsOptional} from 'class-validator';
import {Schema as MongooseSchema} from 'mongoose';

export class CreateResourceDto {
    @IsOptional() id: MongooseSchema.Types.ObjectId;
    @IsOptional() name: string;
    @IsOptional() alias: string;
    @IsOptional() type: string;
    @IsOptional() createdBy: MongooseSchema.Types.ObjectId;
    @IsOptional() updatedBy: MongooseSchema.Types.ObjectId;
=======
import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateResourceDto {
  @IsOptional() id: MongooseSchema.Types.ObjectId;
  @IsOptional() name: string;
  @IsOptional() alias: string;
  @IsOptional() type: string;
  @IsOptional() createdBy: MongooseSchema.Types.ObjectId;
  @IsOptional() updatedBy: MongooseSchema.Types.ObjectId;
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
