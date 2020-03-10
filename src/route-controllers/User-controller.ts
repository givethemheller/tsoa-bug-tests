
import {
  Get,
  Route,
  Tags,
  Header,
  Request,
  Post,
  Body,
  Put,
  Delete,
} from "tsoa";

import { User, OmissionUser } from "./User"
import * as express from "express";


@Route("user")
export class UserController {
  @Get()
  @Tags("User")
  public async AdminFindUser(
    @Request() request: express.Request,
  ): Promise<OmissionUser[]> {
    return ({} as OmissionUser[])
  }

  @Post("find")
  @Tags("User")
  public async FindUser(
    @Request() request: express.Request,
    @Body() requestBody: { conditions: any },
    @Header("page") page?: number,
    @Header("count") count?: number
  ): Promise<User[]> {
    return [] as User[];
  }

  @Get("{UserId}")
  @Tags("User")
  public async GetUser(
    @Request() request: express.Request,
    UserId: string
  ): Promise<User> {
    return {} as User
  }

  @Post()
  @Tags("User")
  public async CreateUser(
    @Request() request: express.Request,
    @Body() requestBody: User): Promise<User> {

    return requestBody
  }

  @Put("{UserId}")
  @Tags("User")
  public async UpdateUser(
    UserId: string,
    @Body() requestBody: User,
    @Request() request: express.Request
  ): Promise<User> {
    return requestBody;
  }

  @Delete("{UserId}")
  @Tags("User")
  public async deleteUser(
    UserId: string,
    @Request() request: express.Request
  ): Promise<boolean> {
    return true;
  }
}
