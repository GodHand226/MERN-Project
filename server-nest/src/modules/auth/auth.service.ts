import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
<<<<<<< HEAD
import * as mongoose from "mongoose";
import {PermissionService} from "../permission/permission.service";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
              private readonly userService: UserService,
              private readonly permissionService: PermissionService) { }

  async createToken(user: JwtPayload) {
    // const user: JwtPayload = { email: 'test@email.com' };
    console.log("createToken user----",user);
=======
import * as mongoose from 'mongoose';
import { PermissionService } from '../permission/permission.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly permissionService: PermissionService,
  ) {}

  async createToken(user: JwtPayload) {
    // const user: JwtPayload = { email: 'test@email.com' };
    console.log('createToken user----', user);
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 100000,
      accessToken,
    };
  }

  async validateUser(username: string, password: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.userService.findByUsername({ username, password });
  }
  async searchPermissions(roleId: mongoose.Types.ObjectId) {
    return await this.permissionService.searchPermissions(roleId);
  }
}
