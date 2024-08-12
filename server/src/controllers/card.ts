import { NextFunction, Request, Response } from 'express';
import { AppError } from '../exceptions/appError';
import { AuthenticatedRequest } from '../interfaces/user';
import { createNewCard } from '../models/card';

export const createCard = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
        const cardData = {...req.body,userId: req.userId};
    try {
        await createNewCard(cardData);
        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getAllCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};
export const getMyCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};

export const editCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};
export const deleteCardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};

export const toggleCardLike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(201).json({ message: 'Card created successfully' });
    } catch (err) {
        next(err);
    }
};

