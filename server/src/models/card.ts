import { getDB } from '../config/db';
import { ObjectId } from 'mongodb';
import { ICard, ICardInput } from '../interfaces/card';

export const getCards = async (): Promise<ICard[]> => {
    const db = getDB();
    return await db.collection<ICard>('cards').find().toArray();
}
;
export const getMyCards = async (cardId:string): Promise<ICard[]> => {
    const db = getDB();
    return await db.collection<ICard>('cards').find({_id: cardId}).toArray();//should implement
};

export const getCardById = async (id: string): Promise<ICard | null> => {
    const db = getDB();
    return await db.collection<ICard>('cards').findOne({ _id: new ObjectId(id)});
};

export const createNewCard = async (card: ICardInput) => {
    const db = getDB();
    return await db.collection<ICardInput>('cards').insertOne(card);
};

export const updateCard = async (id: string, card: Partial<ICard>) => {
    const db = getDB();
    return await db.collection<ICard>('cards').updateOne(
        { _id: new ObjectId(id) },
        { $set: card }
    );
};

export const deleteCard = async (id: string) => {
    const db = getDB();
    return await db.collection<ICard>('cards').deleteOne({ _id: new ObjectId(id) });
};