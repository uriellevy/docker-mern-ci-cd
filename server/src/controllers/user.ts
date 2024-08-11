import { Request, Response } from 'express';
import { createUser, deleteUser, getUser, getUserByEmail, getUsers, updateUser } from '../models/user';
import { hashPassword, match } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

export const signup = async (req: Request, res: Response): Promise<void> => {
    const { password, email } = req.body;

    if (!password || !email) res.status(400).json({ message: 'All fields are required' });

    try {
        const hashedPassword = await hashPassword(req.body.password);
        const user = await await getUserByEmail(email);
        if (user) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        await createUser({ ...req.body, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const {email, password} = req.body;

    if (!email || !password) res.status(400).json({ message: 'All fields are required' });

    try {
        const user = await getUserByEmail(email);
        if(!user) {
            res.status(404).json({ message: 'User not exist' });
            return;
        }
        if(!match(password, user.password)) {
            res.status(400).json({ message: 'Wrong password' });
            return;
        }
        const token = generateToken({_id: user._id, role: user.role})
        res.status(200).json({message:"user logged in successfully", token});
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getUsers();
        res.status(200).json({ message: "users fetched successfully", users });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await getUser(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: "User fetched successfully", user });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


export const updateUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedUser = await updateUser(id, req.body);
        if (updatedUser.matchedCount === 0) {
            res.status(404).json({ message: 'Todo not found' });
            return;
        }
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUser(id);
        if (deletedUser.deletedCount === 0) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};