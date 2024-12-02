import express from "express";
import { deleteUserById, getAllUsers, getUserById, login, logout, signup, updateUserById } from "../controllers/user";
import { requireAdminAuth, requireAuth } from "../middleware/requireAuth";
import { signupValidation } from "../middleware/formValidations/signupValidator";

const router = express.Router();

router.post("/signup",signupValidation, signup);
router.post("/login", login);
router.post("/logout",logout);
router.get("/:id",requireAuth, getUserById);
router.put("/:id",requireAuth ,updateUserById);
router.get("/"/* , requireAdminAuth */,getAllUsers);
router.delete("/:id",requireAdminAuth,deleteUserById);

export default router;