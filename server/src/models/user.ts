import { getDB } from '../config/db';
import { ObjectId, Document } from 'mongodb';
import { IUserInput } from '../interfaces/user';

interface Todo {
    _id?: ObjectId;
    title: string;
    description: string;
    completed: boolean;
}

export const getTodos = async (): Promise<Todo[]> => {
    const db = getDB();
    return await db.collection<Todo>('todos').find().toArray();
};

export const getTodoById = async (id: string): Promise<Todo | null> => {
    const db = getDB();
    return await db.collection<Todo>('todos').findOne({ _id: new ObjectId(id) });
};

export const createUser = async (user: IUserInput) => {
    const db = getDB();
    return await db.collection<IUserInput>('users').insertOne(user);
};

export const updateTodo = async (id: string, todo: Partial<Todo>) => {
    const db = getDB();
    return await db.collection<Todo>('todos').updateOne(
        { _id: new ObjectId(id) },
        { $set: todo }
    );
};

export const deleteTodo = async (id: string) => {
    const db = getDB();
    return await db.collection<Todo>('todos').deleteOne({ _id: new ObjectId(id) });
};