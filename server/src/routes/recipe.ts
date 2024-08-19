import express from "express";
import { createCard, getAllCards, getCardById, editCardById, deleteCardById, toggleCardLike, getMyCards } from "../controllers/card";
import { requireAuth } from "../middleware/requireAuth";
import { recipeValidation } from "../middleware/formValidations/cardValidation";

const router = express.Router();

router.post("/", requireAuth, recipeValidation, createCard);
router.get("/", getAllCards);
router.get("/myCards", requireAuth, getMyCards);
router.get("/:id", getCardById);
router.delete("/:id", requireAuth, deleteCardById);
router.put("/:id", requireAuth, recipeValidation, editCardById);
router.patch("/:id", requireAuth, toggleCardLike);

export default router;