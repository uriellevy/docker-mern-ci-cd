import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export const hashPassword = (password:string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export const match = (password: string, hash: string):Promise<boolean> => {
    return bcrypt.compare(password, hash);
}