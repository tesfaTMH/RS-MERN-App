import Listing from "../models/listingModel.js";
import User from "../models/userModel.js";
import { customErrorHandler } from "../utils/customErrorHandler.js";
import bcryptjs from "bcryptjs";

// test API
export const testAPI = (req, res) => {
  res.json({ message: "Hello, This is a test API for TMH Real Estate App." });
};

// update user profile
export const updateUserController = async (req, res, next) => {
  // check if the user id obtained from cookie is equal to user id
  if (req.user.id !== req.params.id)
    return next(
      customErrorHandler(401, "You can only update your own account!")
    );

  try {
    // user wants to change password hash the password
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          photo: req.body.photo,
        },
      },
      {
        new: true,
      }
    );
    const { password, ...restUserDetails } = updatedUser._doc;
    res.status(200).json(restUserDetails);
  } catch (err) {
    next(err);
  }
};

export const deleteUserController = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(
      next(customErrorHandler(401, "You can only delete your own account!"))
    );
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted successfully...");
  } catch (err) {
    next(err);
  }
};

export const getUserListingController = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (err) {
      next(err);
    }
  } else {
    return next(customErrorHandler(401, "You can only view your own listing"));
  }
};
