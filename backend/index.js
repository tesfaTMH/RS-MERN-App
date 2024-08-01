import express, { urlencoded } from "express";
import dotenv from "dotenv";

import connectDB from "./config/connectDB.js";
import testRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

connectDB();
const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/api/user", testRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
