export interface IUserInput extends IUserAuth {
    name: {
        first: string;
        last: string;
    }
    image: {
        url: string
        alt: string
    }
    // email: string;
    // password: string;
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
    recipes: IUser[]
    message: string
}

export type UserRole = "basic" | "admin"
