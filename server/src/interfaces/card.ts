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


export interface IRecipeInput {
    name: string
    ingredients: IRecipeIngredient[]
    instructions: string[]
    image: {
        alt: string
        url: string
    }
    prepTime: number
    cookTime: number
    servings: number
    cuisine: string
    difficulty: string
}

export interface IRecipeIngredient {
    amount: {
        value: number
        units: string
    }
    ingredient: string
}

export interface IRecipe extends IRecipeInput {
    likes: string[]
    _id: ObjectId | string
    createdAt: Date
    updatedAt: Date
}