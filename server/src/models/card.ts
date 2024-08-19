import { getDB } from '../config/db';
import { ObjectId } from 'mongodb';
import { ICard, ICardInput, IRecipe, IRecipeInput } from '../interfaces/card';

export const getCards = async (): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find().toArray();
}
;
export const getMyCards = async (cardId:string): Promise<IRecipe[]> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').find({_id: cardId}).toArray();//should implement
};

export const getCardById = async (id: string): Promise<IRecipe | null> => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').findOne({ _id: new ObjectId(id)});
};

export const createNewCard = async (card: IRecipeInput) => {
    const db = getDB();
    return await db.collection<IRecipeInput>('recipes').insertOne(card);
};

export const updateCard = async (id: string, card: Partial<IRecipe>) => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').updateOne(
        { _id: new ObjectId(id) },
        { $set: card }
    );
};

export const deleteCard = async (id: string) => {
    const db = getDB();
    return await db.collection<IRecipe>('recipes').deleteOne({ _id: new ObjectId(id) });
};