import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler.js";

import connectDB from "./config/connectDB.js";
import testRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import listingRoute from "./routes/listingRoute.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

app.use("/api/user", testRoute);
app.use("/api/auth", authRoute);
app.use("/api/listing", listingRoute);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
