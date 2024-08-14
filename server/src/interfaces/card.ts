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

// {
//     "name": "Spaghetti Bolognese",
//     "ingredients": [
//         { "amount": { "value": "500", "units": "g" }, "ingredient": "spaghetti" },
//         { "amount": { "value": "400", "units": "g" }, "ingredient": "ground beef" },
//         { "amount": { "value": "1", "units": "" }, "ingredient": "onion, chopped" },
//         { "amount": { "value": "2", "units": "cloves" }, "ingredient": "garlic, minced" },
//         { "amount": { "value": "400", "units": "g" }, "ingredient": "canned tomatoes" },
//         { "amount": { "value": "2", "units": "tablespoons" }, "ingredient": "tomato paste" },
//         { "amount": { "value": "1", "units": "teaspoon" }, "ingredient": "dried oregano" },
//         { "amount": { "value": "1", "units": "teaspoon" }, "ingredient": "dried basil" },
//         { "ingredient": "Salt and pepper to taste" },
//         { "ingredient": "Grated Parmesan cheese for serving" }
//     ],
//     "instructions": [
//         "Cook the spaghetti according to the package instructions.",
//         "In a large pan, brown the ground beef over medium heat.",
//         "Add the chopped onion and minced garlic to the pan and cook until softened.",
//         "Stir in the canned tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper.",
//         "Simmer the sauce for about 15 minutes, stirring occasionally.",
//         "Serve the sauce over the cooked spaghetti and sprinkle with grated Parmesan cheese."
//     ],
//     "prepTime": "20 minutes",
//     "cookTime": "30 minutes",
//     "totalTime": "50 minutes",
//     "servings": 4,
//     "cuisine": "Italian",
//     "difficulty": "Medium"
// }