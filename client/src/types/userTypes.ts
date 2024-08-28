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
    _id: string;
    createdAt: Date
    updatedAt: Date
}

export type UserRole = "basic" | "admin"
