import { NextFunction, Request, Response } from 'express';
import { AppError } from '../exceptions/appError';
import { AuthenticatedRequest } from '../interfaces/user';
import { createNewRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from '../models/recipe';

export const createRecipe = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const recipeData = { ...req.body, userId: req.userId };
    try {
        await createNewRecipe(recipeData);
        res.status(201).json({ message: 'Recipe created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getAllRecipes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const recipes = await getRecipes();
        res.status(200).json({ message: 'Recipe Fetched successfully', recipes });
    } catch (err) {
        next(err);
    }
};

export const getMyRecipes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        res.status(200).json({ message: 'Recipe created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
        const recipe = await getRecipe(id);
        res.status(200).json({ message: 'Recipe fetched successfully', recipe });
    } catch (err) {
        next(err);
    }
};

export const editRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
        await updateRecipe(id, req.body);
        res.status(200).json({ message: 'Recipe created successfully' });
    } catch (err) {
        next(err);
    }
};
export const deleteRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedRecipe = await deleteRecipe(id);
        if (!deletedRecipe.deletedCount) return next(new AppError('Recipe not found', 404));

        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        next(err);
    }
};

export const toggleRecipeLike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    try {

        res.status(200).json({ message: 'Recipe created successfully' });
    } catch (err) {
        next(err);
    }
};

