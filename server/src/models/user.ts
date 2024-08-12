import { getDB } from '../config/db';
import { ObjectId } from 'mongodb';
import { IUser, IUserInput } from '../interfaces/user';

export const getUsers = async (): Promise<IUser[]> => {
    const db = getDB();
    return await db.collection<IUser>('users').find().toArray();
};

export const getUser = async (id: string): Promise<IUser | null> => {
    const db = getDB();
    return await db.collection<IUser>('users').findOne({ _id: new ObjectId(id)});
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
    const db = getDB();
    return await db.collection<IUser>('users').findOne({ email });
};

export const createUser = async (user: IUserInput) => {
    const db = getDB();
    return await db.collection<IUserInput>('users').insertOne(user);
};

export const updateUser = async (id: string, user: Partial<IUser>) => {
    const db = getDB();
    return await db.collection<IUser>('users').updateOne(
        { _id: new ObjectId(id) },
        { $set: user }
    );
};

export const deleteUser = async (id: string) => {
    const db = getDB();
    return await db.collection<IUser>('users').deleteOne({ _id: new ObjectId(id) });
};