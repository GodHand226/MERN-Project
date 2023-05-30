import {
<<<<<<< HEAD
    BadRequestException,
    UseGuards,
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    Res,
    Delete
=======
  BadRequestException,
  UseGuards,
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  Delete,
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from '../../dto/getQueryDto';
import { CreateResourceDto } from './dto/createResource.dto';
import { UpdateResourceDto } from './dto/updateResource.dto';
import { ResourceService } from './resource.service';
import { AuthGuard } from '@nestjs/passport';
<<<<<<< HEAD
import {Roles} from "../auth/roles.decorator";
import {RoleEnum} from "../auth/role.enum";
import { RolesGuard } from '../auth/guards/roles.guard';
import {Resource} from "../../entities/resource.entity";
=======
import { Roles } from '../auth/roles.decorator';
import { RoleEnum } from '../auth/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Resource } from './entity/resource.entity';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67

@UseGuards(RolesGuard)
@Controller('api/resources')
export class ResourceController {
<<<<<<< HEAD
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private resourceService: ResourceService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('/create')
    async createResource(@Body() createResourceDto: CreateResourceDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newResource: any = await this.resourceService.createResource(createResourceDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newResource);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles(RoleEnum.SuperAdmin)
    // @Resources(Resource.Admin)
    @Post('/search')
    async getAllResources(@Body() getQueryDto: GetQueryDto, @Res() res: any) {
        const storages: any = await this.resourceService.getResources(getQueryDto);
        return res.status(HttpStatus.OK).send(storages);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/detail')
    async getResourceById(@Query() query: Resource, @Res() res: Response) {
        const storage: any = await this.resourceService.getResourceById(query?.id);
        return res.status(HttpStatus.OK).send(storage);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/update')
    async updateResource(@Body() updateResourceDto: UpdateResourceDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newResource: any = await this.resourceService.updateResource(updateResourceDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newResource);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/delete')
    async deleteResource(@Query() query: Resource, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const deletedResource: any = await this.resourceService.deleteResource(query.id, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(deletedResource);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }
=======
  constructor(
    @InjectConnection() private readonly mongoConnection: Connection,
    private resourceService: ResourceService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createResource(
    @Body() createResourceDto: CreateResourceDto,
    @Res() res: Response,
  ) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const newResource: any = await this.resourceService.createResource(
        createResourceDto,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(newResource);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Roles(RoleEnum.SuperAdmin)
  // @Resources(Resource.Admin)
  @Post('/search')
  async getAllResources(@Body() getQueryDto: GetQueryDto, @Res() res: any) {
    const storages: any = await this.resourceService.getResources(getQueryDto);
    return res.status(HttpStatus.OK).send(storages);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/detail')
  async getResourceById(@Query() query: Resource, @Res() res: Response) {
    const storage: any = await this.resourceService.getResourceById(query?.id);
    return res.status(HttpStatus.OK).send(storage);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update')
  async updateResource(
    @Body() updateResourceDto: UpdateResourceDto,
    @Res() res: Response,
  ) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const newResource: any = await this.resourceService.updateResource(
        updateResourceDto,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(newResource);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
  async deleteResource(@Query() query: Resource, @Res() res: Response) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const deletedResource: any = await this.resourceService.deleteResource(
        query.id,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(deletedResource);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
