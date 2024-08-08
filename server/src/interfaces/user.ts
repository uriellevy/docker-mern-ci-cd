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
}

export interface IUser extends IUserInput {
    role: UserRole;
    _id: string;
}

export interface IJWTPayload {
    _id: string;
    role: UserRole;
}

type UserRole = "basic" | "admin"