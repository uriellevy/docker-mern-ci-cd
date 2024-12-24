export interface IUserInput extends IUserAuth {
    name: {
        first: string;
        last: string;
    }
    image: {
        url: string
        alt: string
    }
    confirmPassword: string
    role?:UserRole
}

export interface IUser extends IUserInput {
    _id: string;
    createdAt: Date
    updatedAt: Date
}

export interface IUserAuth {
    email: string;
    password: string;
}

export interface IUsersResponse {
    users: IUser[]
    message: string
}

export interface IUserResponse {
    user: IUser
    message: string
}

export type UserRole = "basic" | "admin"