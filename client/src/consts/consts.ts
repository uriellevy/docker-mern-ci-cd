import { IRecipe } from "../types/recipeTyps"

export const CONSTS = {
    APP_HEADER_NAME: "FlavorHub",
    LOGIN: {
        TITLE: "Login",
        NO_PASSWORD_YET:"Do not have an account yet?",
        CREATE_ACCOUNT:"Create account",
        SUBMIT_TITLE:"Sign in"
    },
    SIGNUP: {
        TITLE: "Signup",
        SUBMIT_TITLE:"Sign up",
    },
    NEW_RECIPE:{
        TITLE: "New Recipe",
        SUBMIT_TITLE:"Create"
    },
    RECIPES:{
        SHOW_DETAILS: "Show details",
    },
    SINGLE_RECIPE:{
        COOK_TIME: "Cook Time",
        PREP_TIME: "Prep Time",
        SERVINGS: "Servings",
        DIFFICULTY_LEVEL: "Difficulty"
    },
}

export const dummyData:IRecipe[] = [
    {
      "name": "Better learn.",
      "ingredients": [
        { "amount": { "value": 3.9, "units": "tsp" }, "ingredient": "later" },
        { "amount": { "value": 2.5, "units": "tsp" }, "ingredient": "raise" },
        { "amount": { "value": 1.6, "units": "tbsp" }, "ingredient": "range" },
        { "amount": { "value": 2.5, "units": "tsp" }, "ingredient": "base" }
      ],
      "instructions": [
        "Officer chair grow there.",
        "Leader about big low remain food enough.",
        "Whether window town Mrs rock but.",
        "Church imagine poor son simple particular."
      ],
      "image": { "alt": "Might once.", "url": "https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 7,
      "cookTime": 26,
      "servings": 5,
      "cuisine": "Thai",
      "difficulty": "Medium",
      "likes": [
        "5d813b0d-24e7-41e4-8866-c14e07bb9a21",
        "ed6980de-9452-400b-8ce1-2da595daafdd",
        "4d2d72cf-5330-46df-95c9-7e3d649ee6f3",
        "09637dde-ec7f-4d3f-b357-ef16057e0211"
      ],
      "_id": "9ea13cb8-b43a-488f-9b8c-791cf7de06cf",
      "createdAt": "2024-07-30T19:35:02Z",
      "updatedAt": "2024-03-03T05:51:00Z",
      "userId": "26835798-5d2c-4b98-97cd-9f51a2e08a3a"
    },
    {
      "name": "Ago with few.",
      "ingredients": [
        { "amount": { "value": 2.5, "units": "tbsp" }, "ingredient": "TV" },
        { "amount": { "value": 0.3, "units": "ml" }, "ingredient": "situation" },
        { "amount": { "value": 7.0, "units": "cups" }, "ingredient": "from" },
        { "amount": { "value": 1.0, "units": "tbsp" }, "ingredient": "memory" },
        { "amount": { "value": 0.9, "units": "tbsp" }, "ingredient": "first" },
        { "amount": { "value": 9.7, "units": "ml" }, "ingredient": "window" }
      ],
      "instructions": [
        "Short door and professor.",
        "Thus mother describe know reflect far.",
        "Environment modern notice maintain.",
        "Fire however ask.",
        "Figure true try including among."
      ],
      "image": { "alt": "Opportunity.", "url": "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 41,
      "cookTime": 80,
      "servings": 8,
      "cuisine": "Italian",
      "difficulty": "Medium",
      "likes": [
        "ee5a4317-ad09-43b3-b4fc-067c17c28613",
        "c6bf31c9-45c2-472c-9ec6-07b6318f80e5",
        "9a8cd4ad-82d1-4a5f-b740-2cf4344988a4"
      ],
      "_id": "c34e9c0a-1fd2-4938-8582-ca52ea4d254b",
      "createdAt": "2024-04-05T13:21:23Z",
      "updatedAt": "2024-05-24T20:19:36Z",
      "userId": "8e9f7bc1-574e-499d-997e-6c80e444884f"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1601315379734-425a469078de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://plus.unsplash.com/premium_photo-1677619680553-732e8e153db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVjaXBlfGVufDB8fDB8fHww" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fHww" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://images.unsplash.com/photo-1437750769465-301382cdf094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
    {
      "name": "Model throw.",
      "ingredients": [
        { "amount": { "value": 9.9, "units": "cups" }, "ingredient": "truth" },
        { "amount": { "value": 1.0, "units": "tsp" }, "ingredient": "security" },
        { "amount": { "value": 5.1, "units": "tsp" }, "ingredient": "able" },
        { "amount": { "value": 3.5, "units": "cups" }, "ingredient": "letter" },
        { "amount": { "value": 6.4, "units": "ml" }, "ingredient": "benefit" },
        { "amount": { "value": 1.6, "units": "ml" }, "ingredient": "itself" }
      ],
      "instructions": [
        "Likely our end through source low left owner.",
        "Charge treatment everyone so.",
        "Art over three Mrs."
      ],
      "image": { "alt": "Onto toward.", "url": "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D" },
      "prepTime": 12,
      "cookTime": 72,
      "servings": 10,
      "cuisine": "Chinese",
      "difficulty": "Hard",
      "likes": [
        "1c476cbb-fb32-4454-bff2-5aea042da24a",
        "c3b80ced-daff-4cd3-9176-51610245565b",
        "d7d8ae3d-fd4a-4488-b67a-29c84b14fc85"
      ],
      "_id": "d13b3be7-ceb0-4c8a-b3e5-48b34d42ca67",
      "createdAt": "2024-06-13T09:33:27Z",
      "updatedAt": "2024-01-06T08:20:02Z",
      "userId": "2adaf992-c8c0-4fc5-9e00-35ec0ee1b760"
    },
  ]