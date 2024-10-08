import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ListingCard from "../components/ListingCard";

const Home = () => {
  SwiperCore.use([Navigation]);
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your <span className="text-sky-900 text-pretty">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          <span className="text-indigo-400 italic font-semibold text-xl">
            TMH Real Estate
          </span>{" "}
          will help you find your home fast, easy and comfortable.
          <br />
          We have a wide range of properties for you to choose from.
          <br />
          Our expert support are always available.
        </div>
        <Link
          className="text-blue-800 font-bold text-xs sm:text-sm hover:text-lg hover:underline"
          to={"/search"}
        >
          Let's Start now...
        </Link>
      </div>

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                className="h-[500px]"
                style={{
                  background: `url(${listing.imageURLs[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex flex-col g-8 my-10 max-w-6xl mx-auto p-3">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl text-slate-700 font-semibold">
                Recent offers
              </h2>
              <Link
                className="text-blue-900 text-sm hover:text-lg hover:underline"
                to={"/search?offer=true"}
              >
                show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl text-slate-700 font-semibold">
                Recent places for rent
              </h2>
              <Link
                className="text-blue-900 text-sm hover:text-lg hover:underline"
                to={"/search?type=rent"}
              >
                show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl text-slate-700 font-semibold">
                Recent places for sale
              </h2>
              <Link
                className="text-blue-900 text-sm hover:text-lg hover:underline"
                to={"/search?type=sale"}
              >
                show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
