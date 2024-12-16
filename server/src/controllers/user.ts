import { NextFunction, Request, Response } from 'express';
import { createUser, deleteUser, getUser, getUserByEmail, getUsers, updateUser } from '../models/user';
import { hashPassword, match } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';
import { AppError } from '../exceptions/appError';

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { password, email, role } = req.body;

    if (!password || !email) return next(new AppError('Password and email are required', 400));

    try {
        const hashedPassword = await hashPassword(req.body.password);
        const user = await getUserByEmail(email);

        if (user) return next(new AppError('User is already registered', 400));

        await createUser({ ...req.body, password: hashedPassword, role: role || "basic" });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) return next(new AppError('All fields are required', 400));

    try {
        const user = await getUserByEmail(email);

        if (!user) return next(new AppError('User not found', 404));
        if (!match(password, user.password)) return next(new AppError('Incorrect password', 400));

        const token = generateToken({ _id: user._id, role: user.role })

        res.cookie('authToken', token, {
            httpOnly: false,
            secure: false,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "user logged in successfully"/* , token */ });
    } catch (err) {
        next(err);
    }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie("authToken", {
            httpOnly: true,
            // secure: false,
            sameSite: 'strict',
            // maxAge: 24 * 60 * 60 * 1000,
        })
            .status(200)
            .json({ message: "Successfully logged out" });
    } catch (err) {
        next(err);
    }
}


export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const users = await getUsers();
        res.status(200).json({ message: "users fetched successfully", users });
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await getUser(id);
        if (!user) return next(new AppError('User not found', 404));
        res.status(200).json({ message: "User fetched successfully", user });
    } catch (err) {
        next(err);
    }
};


export const updateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    try {
        const updatedUser = await updateUser(id, req.body);
        if (updatedUser.matchedCount === 0) return next(new AppError('User not found', 404));
        res.status(200).json({ message: 'Todo updated successfully' });
    } catch (err) {
        next(err);
    }
};

export const deleteUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUser(id);
        if (deletedUser.deletedCount === 0) return next(new AppError('User not found', 404));

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        next(err);
    }
};