import { NextFunction, Request, Response } from 'express';
import { AppError } from '../exceptions/appError';
import { AuthenticatedRequest } from '../interfaces/user';
import { createNewCard, deleteCard, getCards } from '../models/card';

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
        const cards = await getCards(); 
        res.status(201).json({ message: 'Card Fetched successfully', cards });
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
    const {id} = req.params;

    try {
        const deletedCard = await deleteCard(id);
        if(!deletedCard.deletedCount) return next(new AppError('Card not found', 404));

        res.status(201).json({ message: 'Card deleted successfully' });
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

