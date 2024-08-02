import React from "react";
import { FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-blue-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">TMH-</span>
            <span className="text-slate-700"> Real Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg flex items-center p-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.photo}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline active:bg-red-500">
                <div className="flex items-center gap-1">
                  <FaSignInAlt />
                  Sign In
                </div>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
