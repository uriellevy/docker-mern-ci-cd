import express from "express";
import { createCard, getAllCards, getCardById, editCardById, deleteCardById, toggleCardLike, getMyCards } from "../controllers/card";

const router = express.Router();

router.post("/", createCard);
router.get("/", getAllCards);
router.get("/myCards", getMyCards);
router.get("/:id", getCardById);
router.delete("/:id", deleteCardById);
router.put("/:id", editCardById);
router.patch("/:id", toggleCardLike);

export default router;