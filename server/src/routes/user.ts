import express from "express";
import { deleteUserById, getAllUsers, getUserById, login, signup, updateUserById } from "../controllers/user";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id",deleteUserById);
router.put("/:id", updateUserById);

export default router;