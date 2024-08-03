import React from "react";

const CreateListing = () => {
  return (
    <main className="max-w-4xl p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center uppercase my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col p-3 gap-4 flex-1">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border rounded-lg p-3"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            id="description"
            placeholder="Description"
            className="border rounded-lg p-3"
            required
          />
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="border rounded-lg p-3"
            required
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <span>Beds</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <span>Baths</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="10"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <div className="flex flex-col items-center">
                <p>Regular price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountPrice"
                min="1"
                max="10"
                required
                className="border border-gray-300 rounded-lg p-2"
              />
              <div className="flex flex-col items-center">
                <p>Discounted price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex">
            <p className="font-semibold">Images:</p>
            <span className="font-normal to-gray-300 ml-2">
              The first image will be the cover (max 6)
            </span>
          </div>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="border border-gray-300 rounded w-full p-3"
            />
            <button className="border border-green-700 rounded text-green-700 uppercase hover:shadow-lg disabled:opacity-80 p-3">
              Upload
            </button>
          </div>
          <button className="bg-slate-800 border rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-80 text-white">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
