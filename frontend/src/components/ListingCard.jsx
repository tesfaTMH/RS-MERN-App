import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  return (
    <div>
      <Link to={`/listing/${listing._id}`}>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow sm:w-[330px]">
          <img
            src={listing.imageURLs[0]}
            alt="listing cover"
            className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="flex flex-col gap-2 w-full p-3">
            <p className="truncate text-lg font-semibold text-slate-700">
              {" "}
              {listing.name}{" "}
            </p>
            <div className="flex items-center g-2">
              <MdLocationOn className="h-4 w-4 text-green-700" />
              <p className="text-sm text-gray-700 truncate">
                {listing.address}{" "}
              </p>
            </div>
            <p className="text-sm text-gray-700 line-clamp-3">
              {listing.description}
            </p>
            <p className="text-slate-600 mt-2 font-semibold">
              ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type == "rent" && " / month"}
            </p>
            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-sm">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </div>
              <div className="font-bold text-sm">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
