import express from "express";
import {
  createListingController,
  deleteListingController,
  updateListingController,
} from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyUserToken.js";

const router = express.Router();

router.post("/create", verifyToken, createListingController);
router.delete("/delete/:id", verifyToken, deleteListingController);
router.post("/update/:id", verifyToken, updateListingController);

export default router;
