import express from "express";
import { createRecipe, getAllRecipes, getRecipeById, editRecipeById, deleteRecipeById, toggleRecipeLike, getMyRecipes, getCuisineList} from "../controllers/recipe";
import { requireAuth } from "../middleware/requireAuth";
import { recipeValidation } from "../middleware/formValidations/recipeValidation";

const router = express.Router();

router.post("/", requireAuth, /* recipeValidation, */ createRecipe);
router.get("/", getAllRecipes);
router.get("/myRecipes", requireAuth, getMyRecipes);
router.get("/cuisineList"/* , requireAuth, */, getCuisineList);
router.get("/:id", getRecipeById);
router.delete("/:id", requireAuth, deleteRecipeById);
router.put("/:id", requireAuth, recipeValidation, editRecipeById);
router.patch("/:id", requireAuth, toggleRecipeLike);

export default router;