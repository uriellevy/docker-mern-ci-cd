import { getDB } from '../config/db';
import { ObjectId } from 'mongodb';
import { IRecipe, IRecipeInput } from '../interfaces/recipe';

export const getRecipes = async (): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find().toArray();
}
;
export const getMyRecipes = async (recipeId:string): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find({_id: recipeId}).toArray();//should implement
};

export const getRecipe = async (id: string): Promise<IRecipe | null> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').findOne({ _id: new ObjectId(id)});
};

export const createNewRecipe = async (recipe: IRecipeInput) => {
    const db = getDB();
    return await db.collection<IRecipeInput>('recipes').insertOne(recipe);
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