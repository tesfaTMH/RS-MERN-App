import express from "express";
import { createListingController } from "../controllers/listingController.js";
import { verifyToken } from "../utils/verifyUserToken.js";

const router = express.Router();

router.post("/create", verifyToken, createListingController);

export default router;
