import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

// sign up controller
export const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user added successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
