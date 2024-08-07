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
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedListing);
  } catch (err) {
    next(err);
  }
};

export const getListingController = async (req, res, next) => {
  try {
    const existingListing = await Listing.findById(req.params.id);
    if (!existingListing) {
      return next(customErrorHandler(404, "Listing not found"));
    }
    res.status(200).json(existingListing);
  } catch (err) {
    next(err);
  }
};

export const getListingsController = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = parseInt(req.query.startIndex) || 0;

    let offer = req.query.offer;
    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const listings = await Listing.find({
      name: { $regex: searchTerm, $options: "i" },
      offer,
      furnished,
      parking,
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);
    return res.status(200).json(listings);
  } catch (err) {
    next(err);
  }
};
