import { NextFunction, Request, Response } from 'express';
import { AppError } from '../exceptions/appError';
import { AuthenticatedRequest } from '../interfaces/user';
import { createNewRecipe, deleteRecipe, getCuisine, getLikedUserRecipe, getRecipe, getRecipes, getUserRecipes, toggleLike, updateRecipe } from '../models/recipe';
import { IFilters, ISortOptions } from '../interfaces/recipe';

export const createRecipe = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const {body,userId} = req;
    const recipeData = { ...body, userId, createdAt: new Date(), updatedAt: new Date(), likes:[]};
    console.log(recipeData)
    try {
        await createNewRecipe(recipeData);
        res.status(201).json({ message: 'Recipe created successfully' });
    } catch (err) {
        next(err);
    }
};

export const getAllRecipes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {sortByLikes, filterByCuisine} = req.query;
    const filters:IFilters = {};
    const sortOptions:ISortOptions = {};
    if(filterByCuisine) filters.cuisine = filterByCuisine as string; 
    if(sortByLikes) sortOptions.likes = sortByLikes === 'asc' ? 1 : -1;

    try {
        const recipes = await getRecipes(filters, sortOptions);
        res.status(200).json({ message: 'Recipe Fetched successfully', recipes });
    } catch (err) {
        next(err);
    }
};

export const getMyRecipes = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const userId  = req.userId;
    try {
        const recipes = await getUserRecipes(userId);
        res.status(200).json({ message: 'My recipes fetched successfully', recipes});
    } catch (err) {
        next(err);
    }
};

export const getLikedRecipes = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.userId;
    try {
    const recipes = await getLikedUserRecipe(userId);
    res.status(200).json({ message: 'My favorites recipes fetched successfully', recipes});
    } catch (err) {
        next(err);
    }
}


export const getRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
        const recipe = await getRecipe(id);
        if(!recipe) return next(new AppError("recipe not found", 404));
        res.status(200).json({ message: 'Recipe fetched successfully', recipe });
    } catch (err) {
        next(err);
    }
};

export const editRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    try {
        const recipe = await getRecipe(id);
        if(!recipe) return next(new AppError("recipe not found", 404));
        await updateRecipe(id, req.body);
        res.status(200).json({ message: 'Recipe edited successfully' });
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

export const toggleRecipeLike = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const userId = req.userId;

    try {
        const recipe = await getRecipe(id);
        if (!recipe) return next(new AppError('Recipe not found', 404));

        const toggled = await toggleLike(recipe, userId);

        res.status(200).json({ message: 'Recipe like toggled successfully', toggled });
    } catch (err) {
        next(err);
    }
};


export const getCuisineList = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const cuisineList = await getCuisine();
        res.status(200).json({ message: 'Cuisine list fetched successfully', cuisineList});
    } catch (err) {
        next(err);
    }
};
