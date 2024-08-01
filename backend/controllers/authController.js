import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { customErrorHandler } from "../utils/customErrorHandler.js";
import jwt from "jsonwebtoken";

// sign up controller
export const signupController = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("user added successfully");
  } catch (err) {
    next(err);
    //res.status(500).json(err.message);
  }
};

export const signinController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //Check if the user exists
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return next(customErrorHandler(404, "User not found"));
    }
    const checkPassword = bcryptjs.compareSync(password, userFound.password);
    if (!checkPassword) {
      return next(customErrorHandler(401, "Invalid email or password"));
    }
    // if password is correct generate token to authenticate the user
    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET);
    // isolate password from the rest of the user details
    const { password: hashedPassword, ...restUserDetails } = userFound._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json(restUserDetails);
  } catch (err) {
    next(err);
  }
};
