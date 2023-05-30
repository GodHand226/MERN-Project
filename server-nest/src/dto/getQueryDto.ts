import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class GetQueryDto {
<<<<<<< HEAD
    @IsOptional()
    id: MongooseSchema.Types.ObjectId;

    @IsOptional()
    current?: number;

    @IsOptional()
    pageSize?: number;
=======
  @IsOptional()
  id: MongooseSchema.Types.ObjectId;

  @IsOptional()
  current?: number;

  @IsOptional()
  pageSize?: number;
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
