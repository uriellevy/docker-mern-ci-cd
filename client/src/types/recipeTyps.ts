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