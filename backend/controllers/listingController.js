import Listing from "../models/listingModel.js";
import { customErrorHandler } from "../utils/customErrorHandler.js";

export const createListingController = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (err) {
    next(err);
  }
};

export const deleteListingController = async (req, res, next) => {
  const existingListing = await Listing.findById(req.params.id);
  if (!existingListing) {
    return next(customErrorHandler(404, "Listing not found"));
  }
  if (req.user.id !== existingListing.userRef) {
    return next(
      customErrorHandler(401, "You can only delete your own listings")
    );
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const updateListingController = async (req, res, next) => {
  const existingListing = await Listing.findById(req.params.id);
  if (!existingListing) {
    return next(customErrorHandler(404, "Listing not found"));
  }
  if (req.user.id !== existingListing.userRef) {
    return next(
      customErrorHandler(401, "You can only update your own listing")
    );
  }

  try {
    const updatedListing = Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedListing);
  } catch (err) {
    next(err);
  }
};
