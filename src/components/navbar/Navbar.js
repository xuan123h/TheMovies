import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[250px] h-[1830px] bg-black fixed z-20 top-[50px] left-2 list-none ml-4">
      <div className="flex items-center ml-[98px] mt-2">
        <span className="w-[15px] h-[15px] rounded-full bg-gray-500"></span>
        <span className="w-[15px] h-[15px] rounded-full bg-orange-500 ml-2 "></span>
        <span className="w-[15px] h-[15px] rounded-full bg-purple-500 ml-2"></span>
      </div>
      <h2 className="text-center mt-[60px] text-white font-bold text-[25px]">
        {" "}
        Watch.{" "}
      </h2>
      <div className="mt-[100px] ml-3">
        <h6 className="text-green-500 font-bold ml-3"> MENU </h6>
        <div className="mt-6">
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-home"></i>
            </span>
            <li className="ml-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-300" : ""
                }
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-group"></i>
            </span>
            <li className="ml-2"> Community </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-bolt-circle"></i>
            </span>
            <li className="ml-2"> Discover </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-book-bookmark"></i>
            </span>
            <li className="ml-2"> Awards </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-user"></i>
            </span>
            <li className="ml-2"> Celebs </li>
          </div>
        </div>
      </div>
      <div className="mt-[50px] ml-3">
        <h6 className="text-green-500 font-bold ml-3"> LIBRARY </h6>
        <div className="mt-6">
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-time-five"></i>
            </span>
            <li className="ml-2"> Recent </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-star"></i>
            </span>
            <li className="ml-2"> Top rated </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              {" "}
              <i class="bx bx-download"></i>{" "}
            </span>
            <li className="ml-2"> Downloaded </li>
          </div>
        </div>
      </div>
      <div className="mt-[50px] ml-3">
        <h6 className="text-green-500 font-bold"> CATEGORIES </h6>
        <div className="mt-6">
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-store-alt"></i>
            </span>
            <li className="ml-2"> TV Series </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              {" "}
              <i class="bx bx-movie-play"></i>{" "}
            </span>
            <li className="ml-2">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "text-orange-300" : ""
                }
              >
                {" "}
                Movies
              </NavLink>{" "}
            </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              {" "}
              <i class="bx bx-video"></i>
            </span>
            <li className="ml-2"> Anime </li>
          </div>
        </div>
      </div>
      <div className="mt-[50px] ml-3">
        <h6 className="text-green-500 font-bold"> GENERAL </h6>
        <div className="mt-6">
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bxs-brightness"></i>
            </span>
            <li className="ml-2"> Settings </li>
          </div>
          <div className="flex items-center ml-[60px] mt-2">
            <span className="text-white">
              <i class="bx bx-log-in-circle"></i>
            </span>
            <li className="ml-2"> Log out </li>
          </div>
        </div>
        {/* Image User */}
        <img
          src="http://1.bp.blogspot.com/-P0rTEgTBCPI/UkVVBaAYekI/AAAAAAAACkA/NWLaNFaBfw0/s1600/hinh-anh-dep-anh+thien+nhien+dep-18.jpg"
          alt=""
          className="w-[50px] h-[50px] object-cover rounded-full ml-14 mt-3"
        />
      </div>
    </div>
  );
};

export default Navbar;
