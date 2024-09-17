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
    difficulty: TDifficulty
    spicyLevel: SpicyLevel
    isVegan: boolean
}

export enum SpicyLevel {
    None = 0,
    A_little_Spicy = 1,
    Spicy = 2,
    Hot = 3,
    Very_Hot = 4,
    Extremely_Hot = 5
}

export type TDifficulty = "Easy" | "Medium" | "Hard";

export interface IRecipeIngredient {
    amount: {
        value: number
        units: string
    }
    ingredient: string
}

export interface IRecipe extends IRecipeInput {
    likes: string[]
    _id: string
    createdAt: Date | string
    updatedAt: Date | string
    userId: string
}

export interface IRecipesResponse {
    recipes: IRecipe[]
    message: string
}
export interface IRecipeResponse {
    recipe: IRecipe
    message: string
}