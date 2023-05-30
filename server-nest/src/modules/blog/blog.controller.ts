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
import { CreateBlogDto } from './dto/createBlog.dto';
import { UpdateBlogDto } from './dto/updateBlog.dto';
import { BlogService } from './blog.service';
import { AuthGuard } from '@nestjs/passport';
<<<<<<< HEAD
import {Roles} from "../auth/roles.decorator";
import {RoleEnum} from "../auth/role.enum";
import { RolesGuard } from '../auth/guards/roles.guard';
import {Blog} from "../../entities/blog.entity";
=======
import { Roles } from '../auth/roles.decorator';
import { RoleEnum } from '../auth/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Blog } from './entity/blog.entity';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67

@UseGuards(RolesGuard)
@Controller('api/blogs')
export class BlogController {
<<<<<<< HEAD
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private blogService: BlogService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('/create')
    async createBlog(@Body() createBlogDto: CreateBlogDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newBlog: any = await this.blogService.createBlog(createBlogDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newBlog);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Roles(RoleEnum.SuperAdmin)
    // @Roles(Role.Admin)
    @Post('/search')
    async getAllBlogs(@Body() getQueryDto: GetQueryDto, @Res() res: any) {
        const storages: any = await this.blogService.getBlogs(getQueryDto);
        return res.status(HttpStatus.OK).send(storages);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/detail')
    async getBlogById(@Query() query: Blog, @Res() res: Response) {
        const storage: any = await this.blogService.getBlogById(query?.id);
        return res.status(HttpStatus.OK).send(storage);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/update')
    async updateBlog(@Body() updateBlogDto: UpdateBlogDto, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const newBlog: any = await this.blogService.updateBlog(updateBlogDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newBlog);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/delete')
    async deleteBlog(@Query() query: Blog, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction();
        try {
            const deletedBlog: any = await this.blogService.deleteBlog(query.id, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(deletedBlog);
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
    private blogService: BlogService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createBlog(@Body() createBlogDto: CreateBlogDto, @Res() res: Response) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const newBlog: any = await this.blogService.createBlog(
        createBlogDto,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(newBlog);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Roles(RoleEnum.SuperAdmin)
  // @Roles(Role.Admin)
  @Post('/search')
  async getAllBlogs(@Body() getQueryDto: GetQueryDto, @Res() res: any) {
    const storages: any = await this.blogService.getBlogs(getQueryDto);
    return res.status(HttpStatus.OK).send(storages);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/detail')
  async getBlogById(@Query() query: Blog, @Res() res: Response) {
    const storage: any = await this.blogService.getBlogById(query?.id);
    return res.status(HttpStatus.OK).send(storage);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update')
  async updateBlog(@Body() updateBlogDto: UpdateBlogDto, @Res() res: Response) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const newBlog: any = await this.blogService.updateBlog(
        updateBlogDto,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(newBlog);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
  async deleteBlog(@Query() query: Blog, @Res() res: Response) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const deletedBlog: any = await this.blogService.deleteBlog(
        query.id,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.OK).send(deletedBlog);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      session.endSession();
    }
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
