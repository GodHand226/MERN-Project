import { IsString } from 'class-validator';

export class LoginUsersDto {
<<<<<<< HEAD
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;
=======
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
