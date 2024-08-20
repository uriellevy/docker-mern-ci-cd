import { getDB } from '../config/db';
import { ObjectId } from 'mongodb';
import { IFilters, IRecipe, ISortOptions } from '../interfaces/recipe';

export const getRecipes = async (filters:IFilters, sortOptions:ISortOptions): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find(filters).sort(sortOptions).toArray();
};
    
export const getUserRecipes = async (userId: string): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find({ userId }).toArray();
};

export const getRecipe = async (id: string): Promise<IRecipe | null> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').findOne({ _id: new ObjectId(id) });
};

export const getCuisine = async (): Promise<string[]> => {
    const db = getDB();

    const result = await db.collection<IRecipe>('recipes')
        .aggregate([
            { $group: { _id: "$cuisine" } },
            { $project: { _id: 0, cuisine: "$_id" } }
        ])
        .toArray();

    return result.map(item => item.cuisine);
};

export const createNewRecipe = async (recipe: IRecipe) => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').insertOne({ ...recipe });
};

export const updateRecipe = async (id: string, recipe: Partial<IRecipe>) => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').updateOne(
        { _id: new ObjectId(id) },
        { $set: recipe }
    );
};

export const deleteRecipe = async (id: string) => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').deleteOne({ _id: new ObjectId(id) });
};

export const toggleLike = async (recipe: IRecipe, userId: string) => {
    const db = getDB();
    const isAlreadyLiked = recipe.likes.includes(userId);
    const query = isAlreadyLiked ? { $pull: { likes: userId } } : { $push: { likes: userId } };
    return await db.collection<IRecipe>('recipes').findOneAndUpdate({ _id: new ObjectId(recipe._id) }, query)
}