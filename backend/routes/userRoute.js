import express from "express";
import {
  updateUserController,
  deleteUserController,
  getUserListingController,
  getUserController,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUserToken.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUserController);
router.delete("/delete/:id", verifyToken, deleteUserController);

router.get("/listing/:id", verifyToken, getUserListingController);
router.get("/:id", verifyToken, getUserController);

export default router;
