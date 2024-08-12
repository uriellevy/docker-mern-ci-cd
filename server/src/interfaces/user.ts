import { ObjectId } from 'mongodb';
import { Request } from 'express';


export interface IUserInput {
    name: {
        first: string;
        last: string;
    }
    image: {
        url: string
        alt: string
    }
    email: string;
    password: string;
    role?:UserRole
}

export interface IUser extends IUserInput {
    _id: ObjectId | string;
    createdAt: Date
    updatedAt: Date
}

export interface IJWTPayload {
    _id: ObjectId | string;
    role: UserRole;
}

export type UserRole = "basic" | "admin"

export interface AuthenticatedRequest extends Request {
    // role?: UserRole;
    userId?: string;
}