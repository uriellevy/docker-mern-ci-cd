import express from "express";
import { deleteUserById, getAllUsers, getUserById, login, signup, updateUserById } from "../controllers/user";
import { requireAdminAuth, requireAuth } from "../middleware/requireAuth";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/:id",requireAuth, getUserById);
router.put("/:id",requireAuth ,updateUserById);
router.get("/", requireAdminAuth,getAllUsers);
router.delete("/:id",requireAdminAuth,deleteUserById);

export default router;