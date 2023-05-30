// import { LoginUsersDto } from '../user/dto/loginUsers.dto';
import { JwtPayload } from './jwt-payload.interface';
<<<<<<< HEAD
import { Controller, Get, UseGuards, Post, Body, Response, Inject, HttpStatus, HttpException } from '@nestjs/common';
=======
import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Response,
  Inject,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('api/auth')
export class AuthController {
<<<<<<< HEAD
    constructor(private readonly authService: AuthService, private readonly userService: UserService) { }

    @Post('login')
    async login(@Body() payload: JwtPayload) {
        const user = await this.userService.findByUsername(payload);
        console.log("login user----",user);
        if (user) {
            if (await this.userService.compareHash(payload.password, user['passwordHash'])) {
                const permissions = await this.authService.searchPermissions(user['roleId']);
                const tokenIfo= await this.authService.createToken({...payload, roleAlias:user['roleAlias']});
                console.log("login user----",tokenIfo);
                return {...tokenIfo, permissions };
            } else {
                throw new HttpException({
                    status: HttpStatus.UNAUTHORIZED,
                    error: 'Wrong username or password',
                }, HttpStatus.UNAUTHORIZED);
            }
        }
    }

    @Post('token')
    async createToken(@Body() payload: JwtPayload): Promise<any> {
        return await this.authService.createToken(payload);
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll() {
        // This route is restricted by AuthGuard
    }
=======
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() payload: JwtPayload) {
    const user = await this.userService.findByUsername(payload);
    console.log('login user----', user);
    if (user) {
      if (
        await this.userService.compareHash(
          payload.password,
          user['passwordHash'],
        )
      ) {
        const permissions = await this.authService.searchPermissions(
          user['roleId'],
        );
        const tokenIfo = await this.authService.createToken({
          ...payload,
          roleAlias: user['roleAlias'],
        });
        console.log('login user----', tokenIfo);
        return { ...tokenIfo, permissions };
      } else {
        throw new HttpException(
          {
            status: HttpStatus.UNAUTHORIZED,
            error: 'Wrong username or password',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }

  @Post('token')
  async createToken(@Body() payload: JwtPayload): Promise<any> {
    return await this.authService.createToken(payload);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    // This route is restricted by AuthGuard
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
