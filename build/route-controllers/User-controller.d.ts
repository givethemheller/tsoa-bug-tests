import { User, OmissionUser, SecondOmit } from "./User";
import * as express from "express";
export declare class UserController {
    AdminFindUser(request: express.Request): Promise<OmissionUser[]>;
    FindUser(request: express.Request, requestBody: {
        conditions: any;
    }, page?: number, count?: number): Promise<SecondOmit[]>;
    GetUser(request: express.Request, UserId: string): Promise<User>;
    CreateUser(request: express.Request, requestBody: User): Promise<User>;
    UpdateUser(UserId: string, requestBody: User, request: express.Request): Promise<User>;
    deleteUser(UserId: string, request: express.Request): Promise<boolean>;
}
