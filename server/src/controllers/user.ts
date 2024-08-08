import { Request, Response } from 'express';
import { createUser } from '../models/user';
import { hashPassword } from '../utils/bcrypt';

export const signup = async (req: Request, res: Response): Promise<void> => {
    const { password, email } = req.body;

    if (!password || !email) res.status(400).json({ message: 'All fields are required' });

    try {
        const hashedPassword = await hashPassword(req.body.password);
        const newUser = await createUser({...req.body, password: hashedPassword});
        res.status(201).json({ message: 'User created successfully', user:newUser});
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        // const newTodo = await createTodo(req.body);
        // res.status(201).json(newTodo.ops[0]);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        // const todos = await getTodos();
        // res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        // const todo = await getTodoById(req.params.id);
        // if (!todo) {
        //     res.status(404).json({ message: 'Todo not found' });
        //     return;
        // }
        // res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const updateUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        // const updatedTodo = await updateTodo(req.params.id, req.body);
        // if (updatedTodo.matchedCount === 0) {
        //     res.status(404).json({ message: 'Todo not found' });
        //     return;
        // }
        // res.status(200).json({ message: 'Todo updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        // const deletedTodo = await deleteTodo(req.params.id);
        // if (deletedTodo.deletedCount === 0) {
        //     res.status(404).json({ message: 'Todo not found' });
        //     return;
        // }
        // res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};