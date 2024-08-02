import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.photo}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          id="username"
          className="border rounded-lg p-3"
          value={currentUser.username}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          className="border rounded-lg p-3"
          value={currentUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          className="border rounded-lg p-3 "
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="bg-sky-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="bg-red-100 uppercase rounded-lg p-3 cursor-pointer font-semibold">
          Delete Account
        </span>
        <span className="bg-red-100 uppercase rounded-lg p-3 cursor-pointer font-semibold">
          sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;
