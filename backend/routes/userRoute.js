import express from "express";
import { testAPI } from "../controllers/userController.js";
import {
  updateUserController,
  deleteUserController,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUserToken.js";

const router = express.Router();

router.get("/test", testAPI);
router.post("/update/:id", verifyToken, updateUserController);
router.delete("/delete/:id", verifyToken, deleteUserController);

export default router;
