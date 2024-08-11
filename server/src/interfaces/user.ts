import { ObjectId } from 'mongodb';

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
}

export interface IJWTPayload {
    _id: ObjectId | string;
    role: UserRole;
}

type UserRole = "basic" | "admin"