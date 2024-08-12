import { ObjectId } from "mongodb"

export interface ICardInput {
    title: string
    subtitle: string
    description: string
    image: {
        alt: string
        url: string
    }

}

export interface ICard extends ICardInput {
    likes: string[]
    _id: ObjectId | string;
    createdAt: Date
    updatedAt: Date
}