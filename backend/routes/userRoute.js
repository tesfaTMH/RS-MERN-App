import express from "express";
import {
  updateUserController,
  deleteUserController,
  getUserListingController,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUserToken.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUserController);
router.delete("/delete/:id", verifyToken, deleteUserController);

router.get("/listing/:id", verifyToken, getUserListingController);

export default router;
