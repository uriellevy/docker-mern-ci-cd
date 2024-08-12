import { NextFunction, Request, Response } from 'express';
import { AppError } from '../exceptions/appError';

export const createCard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getAllCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

export const editCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};
export const deleteCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

export const toggleCardLike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

