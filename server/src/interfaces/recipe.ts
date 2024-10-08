import { ObjectId } from "mongodb"

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
    spicyLevel: string
    isVegan: SpicyLevel
}

export enum SpicyLevel {
    None = 0,
    A_little_Spicy = 1,
    Spicy = 2,
    Hot = 3,
    Very_Hot = 4,
    Extremely_Hot = 5
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
    userId:string
}

export interface IFilters {
    cuisine?: string
}

export interface ISortOptions {
    [key: string]: 1 | -1
    // likes?: 1 | -1
}